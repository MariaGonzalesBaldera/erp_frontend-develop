import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { emailService } from "../../services/email.service";
import {EmailSendRequest } from "../../domain/machinery.interface";

const { sendEmail } = emailService ; 


export const useSendEmail = (): UseMutationResult<any, any, EmailSendRequest> => {
    return useMutation({
      mutationFn: (emailData: EmailSendRequest) => sendEmail(emailData),
    });
  };