<<<<<<< HEAD
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { preventiveMaintenanceService } from "../../services/preventiveMaintenance.service";
import { IMachinery, PreventiveMaintenanceResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = preventiveMaintenanceService; 
=======
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { preventiveMaintenanceService } from "../../services/preventiveMaintenance.service";
import { IMachinery } from "../../domain/machinery.interface";
import { PreventMaintenanceItem } from "../../types";

const { findAll,create,deleteOne, update,findByMachinery,findByModel } = preventiveMaintenanceService; 
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f


export const useGetPreventiveMaintenanceList = () => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched"],
		queryFn: () => findAll(),
	});
};

<<<<<<< HEAD
export const useCreatePreventiveMaintenance = () => {
	return useMutation({
		mutationFn: (data: PreventiveMaintenanceResponse) => create(data),
=======
export const useGetPreventiveByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetPreventiveByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-preventive-maintenance-searched",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreatePreventiveMaintenance = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: PreventMaintenanceItem) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-preventive-maintenance-searched"] });
		},
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useUpdatePreventiveMaintenance = ({
	id,
}: {
<<<<<<< HEAD
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<PreventiveMaintenanceResponse>) =>
			update(data, id),
=======
	id?: number;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<PreventMaintenanceItem>) =>
			update(data, id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-preventive-maintenance-searched"] });
		  },
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useDeletePreventiveMaintenance = (): UseMutationResult<
	IMachinery,
	Error,
<<<<<<< HEAD
	string,
	unknown
> => {
	const userQuery = useMutation({
		mutationFn: async (id: string) => await deleteOne({ id }),
	});

	return userQuery;
=======
	number,
	unknown
> => {
	const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => await deleteOne({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-preventive-maintenance-searched"] });
    },
  });
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};

