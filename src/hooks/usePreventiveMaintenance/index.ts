import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { preventiveMaintenanceService } from "../../services/preventiveMaintenance.service";
import { IMachinery, PreventiveMaintenanceResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = preventiveMaintenanceService; 


export const useGetPreventiveMaintenanceList = () => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreatePreventiveMaintenance = () => {
	return useMutation({
		mutationFn: (data: PreventiveMaintenanceResponse) => create(data),
	});
};

export const useUpdatePreventiveMaintenance = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<PreventiveMaintenanceResponse>) =>
			update(data, id),
	});
};

export const useDeletePreventiveMaintenance = (): UseMutationResult<
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

