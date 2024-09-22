import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { documentsService } from "../../services/documents.service";
import { IMachinery, DocumentResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update,findByMachinery ,findByModel} = documentsService ; 

export const useGetDocumentList = () => {
	return useQuery({
		queryKey: ["get-document-searched"],
		queryFn: () => findAll(),
	});
};

export const useGetDocumentByMachinery = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["get-document-searched",id],
		queryFn: () => findByMachinery(id),
		 enabled: !!id,
	});
};
export const useGetDocumentByModel = ({ model }: { model: string }) => {
	return useQuery({
		queryKey: ["get-document-searched",model],
		queryFn: () => findByModel(model),
		enabled: !!model,
	});
};
export const useCreateDocument = () => {

  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: DocumentResponse) => create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-document-searched"] });
		},
	});
};

export const useUpdateDocument = ({
	id,
}: {
	id?: number;
}) => {
  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<DocumentResponse>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-document-searched"] });
		},
	});
};

export const useDeleteDocument = (): UseMutationResult<
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

