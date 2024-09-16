import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { employeeService } from "../../services/employee.service";
import { IMachinery, EmployeeResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = employeeService ; 


export const useGetEmployeeList = () => {
	return useQuery({
		queryKey: ["get-employee-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateEmployee = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: EmployeeResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-employee-searched"] });
		},
	});
};

export const useUpdateEmployee = ({
	id,
}: {
	id?: number;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<EmployeeResponse>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-employee-searched"] });
		},
	});
};

export const useDeleteEmployee = (): UseMutationResult<
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
				queryKey: ["get-document-searched"]
			})
		}
	});
};

