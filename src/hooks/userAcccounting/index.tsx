import { useQuery } from "@tanstack/react-query";
import { AccountingService } from "../../services/accountingInfo.service";

const { findMonthly } = AccountingService; 

export const useGetAccountingList = ({ id }: { id: string }) => {
	return useQuery({
	  queryKey: ["get-accounting", id], // Incluir id en el queryKey
	  queryFn: () => findMonthly(id),
	  enabled: !!id, // Evitar que se ejecute si id no está definido
	});
  };