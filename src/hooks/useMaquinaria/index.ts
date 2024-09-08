import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
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
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: MachineryResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-machinery-searched"] });
		},
	});
};

export const useUpdateMachinery = ({
	id,
}: {
	id?: string;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<MachineryResponse>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-machinery-searched"] });
		},
	});
};

export const useDeleteMachinery = (): UseMutationResult<
	IMachinery,
	Error,
	number,
	unknown
> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => await deleteOne({ id }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-machinery-searched"] });
		},
	});
};
