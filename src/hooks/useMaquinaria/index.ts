import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { machineryService } from "../../services/machinery.service";
import { MachineryResponse } from "../../domain/machinery.interface";

const { findAll } = machineryService ; 


export const useGetMachineryList = () => {
	return useQuery({
		queryKey: ["get-machinery-searched"],
		queryFn: () => findAll(),
	});
};