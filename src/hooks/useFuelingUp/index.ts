import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { fuelingUpService } from "../../services/fuelingUp.service";
import { IMachinery, FuelingUpResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = fuelingUpService;


export const useGetFuelingUpList = () => {
	return useQuery({
		queryKey: ["get-fuelingUp-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateFuelingUp = () => {
	return useMutation({
		mutationFn: (data: FuelingUpResponse) => create(data),
	});
};

export const useUpdateFuelingUp = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<FuelingUpResponse>) =>
			update(data, id),
	});
};

export const useDeleteFuelingUp = (): UseMutationResult<
	IMachinery,
	Error,
	string,
	unknown
> => {
	const userQuery = useMutation({
		mutationFn: async (id: string) => await deleteOne({ id }),
	});

	return userQuery;
};

