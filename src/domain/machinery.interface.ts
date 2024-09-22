export interface MachineryResponse {
<<<<<<< HEAD
<<<<<<< HEAD
  id?: number;
=======
  id: number | undefined;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  id: number | undefined;
>>>>>>> feature/addAuthProcess
  brand: string;
  model: string;
  modelYear: string;
  acquisitionDate: string;
  netLoad: string;
  fuelType: string;
  createdAt?: string;
  updatedAt?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface DocumentResponse {
  id?: string;
=======
=======
>>>>>>> feature/addAuthProcess
export interface CredentialsBody {
  username: string;
  password: string;
}

export interface DocumentResponse {
  id?: number;
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
  heavyMachineryId?: string;
=======
  heavyMachineryId?: number;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  heavyMachineryId?: number;
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
  id?: string,
=======
  id?: number,
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  id?: number,
>>>>>>> feature/addAuthProcess
  transactionDate: string,
  hoursOperated: number,
  hourlyRate: number,
  totalIncome: number,
  invoiceNumber: string,
  projectName: string,
  createdAt?: string,
  updatedAt?: string,
<<<<<<< HEAD
<<<<<<< HEAD
  heavyMachineryId?: string
=======
  heavyMachineryId?: number
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  heavyMachineryId?: number
>>>>>>> feature/addAuthProcess
}

export interface FuelingUpResponse {
  id?: string,
<<<<<<< HEAD
<<<<<<< HEAD
  numberGallons: string,
=======
  numberGallons: number,
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  numberGallons: number,
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/addAuthProcess

export interface InspectionResponse {
  id?: number,
  projectName: string,
  unitData: string,
  activity: string,
  location: string,
  registrationDate: string,
  frontLights: boolean,
  rearLights: boolean,
  directionalLights: boolean,
  rolloverProtection: boolean,
  seatbelt: boolean,
  bucketConditionAndOperation: boolean,
  seatCondition: boolean,
  windows: boolean,
  cabin: boolean,
  reverseAlarm: boolean,
  accessLadderAndSupports: boolean,
  mirrors: boolean,
  horn: boolean,
  controlLevers: boolean,
  pedals: boolean,
  liftCylinders: boolean,
  articulationCylinders: boolean,
  doorConditionWithLock: boolean,
  battery: boolean,
  electricalInstallation: boolean,
  steering: boolean,
  engine: boolean,
  radiator: boolean,
  indicators: boolean,
  brakingSystem: boolean,
  oilCooler: boolean,
  hydraulicSystemBlock: boolean,
  hoses: boolean,
  belts: boolean,
  electricalSystem: boolean,
  swingMechanism: boolean,
  swingMechanismBrake: boolean,
  armLiftControls: boolean,
  rightTrack: boolean,
  leftTrack: boolean,
  spillKit: boolean,
  fireExtinguisher20Lbs: boolean,
  safetyCones: boolean,
  operator: string,
  residentEngineer: string,
  ssoma: string,
  observations: string,
  createdAt?: string,
  updatedAt?: string,
  heavyMachineryId?: number
}

export interface AccountingResponse {
  id?: number,
  year: number,
  month: number,
  originDescription: string,
  transactionType: string,
  amountPaid: number
<<<<<<< HEAD
}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
}
>>>>>>> feature/addAuthProcess
