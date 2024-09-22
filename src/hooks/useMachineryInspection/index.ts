<<<<<<< HEAD
<<<<<<< HEAD
///falta validar api
=======
=======
>>>>>>> feature/addAuthProcess
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { InspectionService } from "../../services/machineryInspection.service";
import { IMachinery, InspectionResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update ,findByModel,findByMachinery} = InspectionService ; 

export const useGetInspectionList = () => {
	return useQuery({
		queryKey: ["get-inspection-searched"],
		queryFn: () => findAll(),
	});
};
export const useGetInspectionByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-inspection-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetInspectionByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-inspection-searched",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreateInspection = () => {

  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: InspectionResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-inspection-searched"] });
		},
	});
};

export const useUpdateInspection = ({
	id,
}: {
	id?: number;
}) => {
  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<InspectionResponse>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-inspection-searched"] });
		},
	});
};

export const useDeleteInspection = (): UseMutationResult<
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
				queryKey: ["get-inspection-searched"]
			})
		}
	});

};

<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
