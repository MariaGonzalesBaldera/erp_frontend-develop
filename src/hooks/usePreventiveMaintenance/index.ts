import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { preventiveMaintenanceService } from "../../services/preventiveMaintenance.service";
import { IMachinery } from "../../domain/machinery.interface";
import { PreventMaintenanceItem } from "../../types";

const { findAll,create,deleteOne, update,findByMachinery,findByModel } = preventiveMaintenanceService; 


export const useGetPreventiveMaintenanceList = () => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched"],
		queryFn: () => findAll(),
	});
};

export const useGetPreventiveByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetPreventiveByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-preventive-searched-model",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreatePreventiveMaintenance = () => {
	return useMutation({
		mutationFn: (data: PreventMaintenanceItem) => create(data),
	});
};

export const useUpdatePreventiveMaintenance = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<PreventMaintenanceItem>) =>
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

