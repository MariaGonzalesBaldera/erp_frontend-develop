import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { transportationCostService } from "../../services/transportationCost.service";
import { IMachinery, TransportationResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = transportationCostService ; 


export const useGetTransportationList = () => {
	return useQuery({
		queryKey: ["transportation-cost-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateTransportation = () => {
	return useMutation({
		mutationFn: (data: TransportationResponse) => create(data),
	});
};

export const useUpdateTransportation = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<TransportationResponse>) =>
			update(data, id),
	});
};

export const useDeleteTransportation = (): UseMutationResult<
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

