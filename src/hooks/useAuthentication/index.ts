import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "../../services/auth.service";
import { NewPasswordRequest, UserItem, UserRequest } from "../../types";
import { IMachinery } from "../../domain/machinery.interface";

const { findAll, create, update, deleteOne, updatePassword } = authService;

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["get-user-searched"],
    queryFn: () => findAll(),
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UserRequest) => create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-searched"] });
    },
  });
};
export const useUpdateUser = ({
  id,
}: {
  id?: number;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<UserItem>) =>
      update(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-searched"] });
    },
  });
};

export const useDeleteUser = (): UseMutationResult<
  IMachinery,
  Error,
  number,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => await deleteOne({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-searched"] });
    },
  });
};

export const useChangePassword = ({
  id,
}: {
  id: number;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<NewPasswordRequest>) =>
      updatePassword(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-searched"] });
    },
  });
};