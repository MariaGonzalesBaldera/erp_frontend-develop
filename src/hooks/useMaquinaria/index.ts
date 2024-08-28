import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { machineryService } from "../../services/machinery.service";
import { IMachinery, MachineryResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = machineryService ; 


export const useGetMachineryList = () => {
	return useQuery({
		queryKey: ["get-machinery-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateMachinery = () => {
	return useMutation({
		mutationFn: (data: MachineryResponse) => create(data),
	});
};

export const useUpdateMachinery = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<MachineryResponse>) =>
			update(data, id),
	});
};

export const useDeleteMachinery = (): UseMutationResult<
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

