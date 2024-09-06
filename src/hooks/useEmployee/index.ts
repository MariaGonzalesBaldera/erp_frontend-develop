import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
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
	return useMutation({
		mutationFn: (data: EmployeeResponse) => create(data),
	});
};

export const useUpdateEmployee = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<EmployeeResponse>) =>
			update(data, id),
	});
};

export const useDeleteEmployee = (): UseMutationResult<
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

