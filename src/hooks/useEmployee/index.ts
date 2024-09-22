<<<<<<< HEAD
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { employeeService } from "../../services/employee.service";
import { IMachinery, EmployeeResponse } from "../../domain/machinery.interface";
=======
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { employeeService } from "../../services/employee.service";
import { IMachinery } from "../../domain/machinery.interface";
import { employeeItem } from "../../types";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

const { findAll,create,deleteOne, update } = employeeService ; 


export const useGetEmployeeList = () => {
	return useQuery({
		queryKey: ["get-employee-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateEmployee = () => {
<<<<<<< HEAD
	return useMutation({
		mutationFn: (data: EmployeeResponse) => create(data),
=======
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: employeeItem) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-employee-searched"] });
		},
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useUpdateEmployee = ({
	id,
}: {
<<<<<<< HEAD
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<EmployeeResponse>) =>
			update(data, id),
=======
	id?: number;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<employeeItem>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-employee-searched"] });
		},
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useDeleteEmployee = (): UseMutationResult<
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
		onSuccess:()=>{
			queryClient.invalidateQueries({
				queryKey: ["get-document-searched"]
			})
		}
	});
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};

