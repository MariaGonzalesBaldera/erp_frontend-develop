import { useQuery } from "@tanstack/react-query";
import { AccountingService } from "../../services/accountingInfo.service";

const { findMonthly,findRangeDate } = AccountingService;

export const useGetAccountingList = ({ searchMonth }: { searchMonth: string }) => {
  return useQuery({
    queryKey: ["get-accounting", searchMonth],
    queryFn: () => findMonthly(searchMonth),
    enabled: !!searchMonth,
  });
};

export const useGetAccountingRangeList = ({
	searchDateStart,
	searchDateEnd,
  }: {
	searchDateStart: string;
	searchDateEnd: string;
  }) => {
	return useQuery({
	  queryKey: ["get-accounting-range", searchDateStart, searchDateEnd],
	  queryFn: () => findRangeDate(searchDateStart, searchDateEnd),
	  enabled: !!searchDateStart && !!searchDateEnd,
	});
  };
  