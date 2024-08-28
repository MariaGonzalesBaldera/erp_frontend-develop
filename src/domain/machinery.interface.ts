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

export type ParamsDelete = {
	id: string;
};

export type IMachinery = {
    message? : string,
}