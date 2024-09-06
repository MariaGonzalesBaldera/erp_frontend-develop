import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { machineryTypeService } from "../../services/machineryType.service";
import { IMachinery, MachineryTypeResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = machineryTypeService;


export const useGetMachineryTypeList = () => {
	return useQuery({
		queryKey: ["get-machinery-ype-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateMachineryType = () => {
	return useMutation({
		mutationFn: (data: MachineryTypeResponse) => create(data),
	});
};

export const useUpdateMachineryType = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<MachineryTypeResponse>) =>
			update(data, id),
	});
};

export const useDeleteMachineryType = (): UseMutationResult<
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

