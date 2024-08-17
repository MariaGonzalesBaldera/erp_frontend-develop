export interface MaquinariaData {
    id: number;
    brand: string;
    model: string;
    modelYear: string;
    acquisitionDate: string;
    netLoad: string;
    fuelType: string;
    createdAt: string;
    updatedAt: string;
}

export interface PreventMaintenance {
    id:string;
    description:string;
    maintenance_date:string;
    amount_paid:string;
    operator:string;
    project_name:string;
    observations:string;
    driving_start:string;
    driving_end:string;
}