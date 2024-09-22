<<<<<<< HEAD
<<<<<<< HEAD
//falta arreglar el api
=======
=======
>>>>>>> feature/addAuthProcess
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { CorrectiveMaintananceService } from "../../services/correctiveMaintenance.service";
import { IMachinery } from "../../domain/machinery.interface";
import { CorrectiveMaintananceItem } from "../../types";

const { findAll, create, deleteOne, update, findByMachinery, findByModel } = CorrectiveMaintananceService;

export const useGetCorrectiveList = () => {
	return useQuery({
		queryKey: ["get-corrective-searched"],
		queryFn: () => findAll(),
	});
};

export const useGetCorrectiveByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-corrective-searched", id],
		queryFn: () => findByMachinery(id),
		enabled: !!id,
	});
};
export const useGetCorrectiveByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-corrective-searched", model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreateCorrective = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ data, files }: { data: CorrectiveMaintananceItem; files: File[] }) => create(data, files),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-corrective-searched"] });
		},
	});
};

export const useUpdateCorrective = ({ id }: { id?: number }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ data, files }: { data: Partial<CorrectiveMaintananceItem>; files: File[] }) =>
			update(data, files, id),
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
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["get-corrective-searched"]
			})
		}
	});

};

<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
