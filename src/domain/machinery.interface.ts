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

export interface CredentialsBody {
  username: string;
  password: string;
}

export interface DocumentResponse {
  id?: number;
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
  heavyMachineryId?: string;
}

export type ParamsDelete = {
  id: string;
};

export type ParamsDeleteItem = {
  id: number;
};

export type IMachinery = {
  message?: string,
}

//transportation
export interface TransportationResponse {
  id?: string
  description: string
  transactionDate: string
  amountPaid: number
  invoiceNumber: string
  operatorName: string
  projectName: string
  createdAt?: string
  updatedAt?: string
  heavyMachineryId?: string
}

export interface PreventiveMaintenanceResponse {
  id: string,
  motorOil: boolean,
  oilFilters: boolean,
  fuelFilters: boolean,
  airFilters: boolean,
  transmissionOil: boolean,
  periodType: string,
  maintenancePeriod: string,
  maintenanceDate: string,
  nextMaintenancePeriod: string,
  amountPaid: number,
  invoiceNumber: string,
  observations: string,
  createdAt?: string,
  updatedAt?: string,
  heavyMachineryId?: string,
}

export interface MachineryTypeResponse {
  id?: string,
  type: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface MachineryIncomeResponse {
  id?: string,
  transactionDate: string,
  hoursOperated: number,
  hourlyRate: number,
  totalIncome: number,
  invoiceNumber: string,
  projectName: string,
  createdAt?: string,
  updatedAt?: string,
  heavyMachineryId?: string
}

export interface FuelingUpResponse {
  id?: string,
  numberGallons: string,
  fuelingMileage: string,
  fuelingDate: string,
  amountPaid: number,
  invoiceNumber: string,
  createdAt?: string,
  updatedAt?: string,
  heavyMachineryId?: string,
}

export interface EmployeeResponse {
  id: string,
  firstName: string,
  lastName: string,
  address: string,
  age: number,
  documentType: string,
  documentNumber: string,
  phoneNumber: string,
  email: string,
  dateOfBirth: string,
  startDate: string,
  position: string,
  attendance: string,
  salary: number,
  overtimeHours: number,
  performance: number,
  createdAt: string,
  updatedAt: string
}

export interface EmailSendRequest {
  destinatario: string;
  asunto: string;
  descripcionIncidente: string;
  operatorName: string;
  projectName: string;
  drivingStart: Date;
  drivingEnd: Date;
  imagenesEvidencia: string[];
}
