<<<<<<< HEAD
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { fuelingUpService } from "../../services/fuelingUp.service";
import { IMachinery, FuelingUpResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = fuelingUpService;
=======
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { fuelingUpService } from "../../services/fuelingUp.service";
import { IMachinery, FuelingUpResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update,findByModel,findByMachinery } = fuelingUpService;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f


export const useGetFuelingUpList = () => {
	return useQuery({
<<<<<<< HEAD
		queryKey: ["get-fuelingUp-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateFuelingUp = () => {
	return useMutation({
		mutationFn: (data: FuelingUpResponse) => create(data),
=======
		queryKey: ["get-fueling-up-searched"],
		queryFn: () => findAll(),
	});
};
export const useGetFuelingUpByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-fueling-up-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetFuelingUpByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-fueling-up-searched",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};

export const useCreateFuelingUp = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: FuelingUpResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-fueling-up-searched"] });
		},
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useUpdateFuelingUp = ({
	id,
}: {
<<<<<<< HEAD
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<FuelingUpResponse>) =>
			update(data, id),
	});
};

export const useDeleteFuelingUp = (): UseMutationResult<
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

=======
  id?: number;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<FuelingUpResponse>) =>
      update(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-fueling-up-searched"] });
    },
  });
};

export const useDeleteFuelingUp = (): UseMutationResult<
IMachinery,
  Error,
  number,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => await deleteOne({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-fueling-up-searched"] });
    },
  });
};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
