import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
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
	});
};

export const useUpdatePreventiveMaintenance = ({
	id,
}: {
	id?: number;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<PreventMaintenanceItem>) =>
			update(data, id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-preventive-maintenance-searched"] });
		  },
	});
};

export const useDeletePreventiveMaintenance = (): UseMutationResult<
	IMachinery,
	Error,
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
};

