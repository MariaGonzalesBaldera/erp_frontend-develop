import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { machineryIncomeService } from "../../services/machineryIncome.service";
import {
  IMachinery,
  MachineryIncomeResponse,
} from "../../domain/machinery.interface";

const { findAll, create, deleteOne, update, findByMachinery, findByModel } =
  machineryIncomeService;

export const useGetIncomeList = () => {
  return useQuery({
    queryKey: ["get-income-searched"],
    queryFn: () => findAll(),
  });
};

export const useGetIncomeByMachinery = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["get-income-searched", id],
    queryFn: () => findByMachinery(id),
    enabled: !!id,
  });
};
export const useGetIncomeByModel = ({ model }: { model: string }) => {
  return useQuery({
    queryKey: ["get-income-searched-model", model],
    queryFn: () => findByModel(model),
    enabled: !!model,
  });
};
export const useCreateIncome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: MachineryIncomeResponse) => create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-income-searched"] });
    },
  });
};

export const useUpdateIncome = ({ id }: { id?: number }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<MachineryIncomeResponse>) => update(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-income-searched"] });
    },
  });
};

export const useDeleteIncome = (): UseMutationResult<
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
        queryKey: ["get-income-searched"],
      });
    },
  });
};
