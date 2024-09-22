<<<<<<< HEAD
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { documentsService } from "../../services/documents.service";
import { IMachinery, DocumentResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = documentsService ; 

=======
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { documentsService } from "../../services/documents.service";
import { IMachinery, DocumentResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update,findByMachinery ,findByModel} = documentsService ; 
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

export const useGetDocumentList = () => {
	return useQuery({
		queryKey: ["get-document-searched"],
		queryFn: () => findAll(),
	});
};

<<<<<<< HEAD
export const useCreateDocument = () => {
	return useMutation({
		mutationFn: (data: DocumentResponse) => create(data),
=======
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useUpdateDocument = ({
	id,
}: {
<<<<<<< HEAD
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<DocumentResponse>) =>
			update(data, id),
=======
	id?: number;
}) => {
  const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: Partial<DocumentResponse>) =>
			 update(data, id), 
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-document-searched"] });
		},
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	});
};

export const useDeleteDocument = (): UseMutationResult<
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

