import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { CorrectiveMaintananceService } from "../../services/correctiveMaintenance.service";
import { IMachinery } from "../../domain/machinery.interface";
import { CorrectiveMaintananceItem } from "../../types";

const { findAll,create,deleteOne, update,findByMachinery,findByModel } = CorrectiveMaintananceService;

export const useGetCorrectiveList = () => {
	return useQuery({
		queryKey: ["get-corrective-searched"],
		queryFn: () => findAll(),
	});
};

export const useGetCorrectiveByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-corrective-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetCorrectiveByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-corrective-searched-model",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreateCorrective = () => {

  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: CorrectiveMaintananceItem) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-corrective-searched"] });
		},
	});
};

export const useUpdateCorrective = ({
	id,
}: {
	id?: number;
}) => {
  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<CorrectiveMaintananceItem>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-corrective-searched"] });
		},
	});
};

export const useDeleteCorrective = (): UseMutationResult<
	IMachinery,
	Error,
	number,
	unknown
> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => await deleteOne({ id }),
		onSuccess:()=>{
			queryClient.invalidateQueries({
				queryKey: ["get-corrective-searched"]
			})
		}
	});

};

