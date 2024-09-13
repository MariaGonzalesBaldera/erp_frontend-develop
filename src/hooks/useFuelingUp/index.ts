import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { fuelingUpService } from "../../services/fuelingUp.service";
import { IMachinery, FuelingUpResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = fuelingUpService;


export const useGetFuelingUpList = () => {
	return useQuery({
		queryKey: ["get-fueling-up-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateFuelingUp = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: FuelingUpResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-fueling-up-searched"] });
		},
	});
};

export const useUpdateFuelingUp = ({
	id,
}: {
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
