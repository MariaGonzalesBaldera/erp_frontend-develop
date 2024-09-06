
import { EmailSendRequest } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";
const sendEmail = async (data: EmailSendRequest): Promise<any> => {
	return axios
		.post("/email/sendEmail", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

export const emailService = {
	sendEmail
};