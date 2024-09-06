import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { documentsService } from "../../services/documents.service";
import { IMachinery, DocumentResponse } from "../../domain/machinery.interface";

const { findAll,create,deleteOne, update } = documentsService ; 


export const useGetDocumentList = () => {
	return useQuery({
		queryKey: ["get-document-searched"],
		queryFn: () => findAll(),
	});
};

export const useCreateDocument = () => {
	return useMutation({
		mutationFn: (data: DocumentResponse) => create(data),
	});
};

export const useUpdateDocument = ({
	id,
}: {
	id?: string;
}) => {
	return useMutation({
		mutationFn: (data: Partial<DocumentResponse>) =>
			update(data, id),
	});
};

export const useDeleteDocument = (): UseMutationResult<
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

