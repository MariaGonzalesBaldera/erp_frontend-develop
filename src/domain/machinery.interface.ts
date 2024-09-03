export interface MachineryResponse {
    id?: number;
    brand: string;
    model: string;
    modelYear: string;
    acquisitionDate: string;
    netLoad: string;
    fuelType: string; 
    createdAt?: string;
    updatedAt?: string;
}

export interface DocumentResponse {
    id: string;
    technicalReviewsStart: string;
    technicalReviewsEnd: string;
    soatStart: string;
    soatEnd: string;
    insuranceStart: string;
    insuranceEnd: string;
    trekInsuranceStart: string;
    trekInsuranceEnd: string;
    operatingCertificateStart: string;
    operatingCertificateEnd: string;
    createdAt?: string;
    updatedAt?: string;
    heavyMachineryId: string;
  }

export type ParamsDelete = {
	id: string;
};

export type IMachinery = {
    message? : string,
}

//transportation
export interface TransportationResponse {
    id: string
    description: string
    transactionDate: string
    amountPaid: number
    invoiceNumber: string
    operatorName: string
    projectName: string
    createdAt: string
    updatedAt: string
    heavyMachineryId: string
  }