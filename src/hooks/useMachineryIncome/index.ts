import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { machineryIncomeService } from "../../services/machineryIncome.service";
import { IMachinery, MachineryIncomeResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = machineryIncomeService; 


export const useGetMachineryIncomeList = () => {
	return useQuery({
		queryKey: ["get-machinery-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateMachineryIncome = () => {
	return useMutation({
		mutationFn: (data: MachineryIncomeResponse) => create(data),
	});
};

export const useUpdateMachineryIncome = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<MachineryIncomeResponse>) =>
			update(data, id),
	});
};

export const useDeleteMachineryIncome = (): UseMutationResult<
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

