import { useState } from "react";
import { MachineryResponse } from "../domain/machinery.interface";

//types data
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/addAuthProcess

export interface UserItem {
  id?: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NewPasswordRequest {
  currentPassword: string,
  newPassword: string
}

export interface UserRequest {
  userDTO: {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    role: string,
  },
  password: string,
}

<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
export interface MaquinariaDataItem {
  id: number;
  brand: string;
  model: string;
  modelYear: string;
  acquisitionDate: string;
  netLoad: string;
  fuelType: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PreventMaintenanceItem {
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  description: string;
  maintenance_date: string; ///filtro
  amount_paid: string;
  operator: string;
  project_name: string;
  observations: string;
  driving_start: string;
  driving_end: string;
  heavyMachineryId: String;
}

export interface CorrectiveMaintananceItem {
  id: String;
  description: string;
  maintenanceDate: string;
  amountPaid: string;
=======
=======
>>>>>>> feature/addAuthProcess
  id?: number;
  motorOil: boolean;
  oilFilters: boolean;
  fuelFilters: boolean;
  airFilters: boolean;
  transmissionOil: boolean;
  periodType: string;
  maintenancePeriod: string;
  maintenanceDate: string;
  nextMaintenancePeriod: string;
  amountPaid: number;
  invoiceNumber: string;
  observations: string;
  createdAt?: string;
  updatedAt?: string;
  heavyMachineryId?: number;
}

export interface CorrectiveMaintananceItem {
  id?: number;
  description: string;
  maintenanceDate: string;
  amountPaid: number;
  invoiceNumber: string;
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  operatorName: string;
  projectName: string;
  observations: string;
  drivingStart: string;
  drivingEnd: string;
<<<<<<< HEAD
<<<<<<< HEAD
  heavyMachineryId: String;
=======
  createdAt?: string;
  updatedAt?: string;
  heavyMachineryId?: number
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  createdAt?: string;
  updatedAt?: string;
  heavyMachineryId?: number
>>>>>>> feature/addAuthProcess
}

export interface MachineryInspectionItem {
  projectName: string;
  unitData: string;
  activity: string;
  location: string;
  registrationDate: string; //filtro
  frontLights: boolean;
  rearLights: boolean;
  directionalLights: boolean;
  rolloverProtection: boolean;
  seatbelt: boolean;
  bucketConditionAndOperation: boolean;
  seatCondition: boolean;
  windows: boolean;
  cabin: boolean;
  reverseAlarm: boolean;
  accessLadderAndSupports: boolean;
  mirrors: boolean;
  horn: boolean;
  controlLevers: boolean;
  pedals: boolean;
  liftCylinders: boolean;
  articulationCylinders: boolean;
  doorConditionWithLock: boolean;
  battery: boolean;
  electricalInstallation: boolean;
  steering: boolean;
  engine: boolean;
  radiator: boolean;
  indicators: boolean;
  brakingSystem: boolean;
  oilCooler: boolean;
  hydraulicSystemBlock: boolean;
  hoses: boolean;
  belts: boolean;
  electricalSystem: boolean;
  swingMechanism: boolean;
  swingMechanismBrake: boolean;
  armLiftControls: boolean;
  rightTrack: boolean;
  leftTrack: boolean;
  spillKit: boolean;
  fireExtinguisher20Lbs: boolean;
  safetyCones: boolean;
  operator: string;
  residentEngineer: string;
  ssoma: string;
  observations: string;
<<<<<<< HEAD
<<<<<<< HEAD
  createdAt: string;
  updatedAt: string;
  heavyMachineryId: string;
}
export interface DocumentItem {
  id: string;
=======
=======
>>>>>>> feature/addAuthProcess
  createdAt?: string;
  updatedAt?: string;
  heavyMachineryId?: number;
}
export interface DocumentItem {
  id: number;
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
  heavyMachineryId: string;
}

export interface FuelLoadProps {
  id: string;
=======
=======
>>>>>>> feature/addAuthProcess
  heavyMachineryId?: number;
}

export interface FuelLoadProps {
  id: number;
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  numberGallons: number;
  fuelingMileage: string;
  fuelingDate: string;
  amountPaid: number;
  invoiceNumber: string;
  createdAt?: string;
  updatedAt?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  heavyMachineryId: string;
=======
  heavyMachineryId?: number;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  heavyMachineryId?: number;
>>>>>>> feature/addAuthProcess
}

export interface TransportationCost {
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


///props components
export interface HeaderPageProps {
  title: string,
  titleButton: string,
  handleOpen: () => void,
}

export interface ModalEditDocumentProps {
  openModal: boolean;
  handleClose: () => void;
  data: DocumentItem;
  mode: string
}

export interface MaintenanceProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface PreventMaintenanceProps {
<<<<<<< HEAD
<<<<<<< HEAD
  mode: string
}

export interface CorrectiveMaintenanceProps {
  mode: string
=======
=======
>>>>>>> feature/addAuthProcess
  idMachinery: number;
}

export interface CorrectiveMaintenanceProps {
  idMachinery: number;
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
}

export interface ModalEditMaintenanceProps {
  openModal: boolean;
  handleClose: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  data: PreventMaintenanceItem;
=======
  data: CorrectiveMaintananceItem;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  data: CorrectiveMaintananceItem;
>>>>>>> feature/addAuthProcess
  mode: string;
}

export interface ModalFormProps {
  openModal: boolean;
  handleClose: () => void;
  data: MachineryResponse;
  mode: string;
}

export interface MonthlyAccountingInformation {
  year: number;
  month: number;
  originDescription: string;
  transactionType: string;
  amountPaid: number;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
}

export interface DetailedAccountingInformation {
  id: number;
  year: number;
  month: number;
  originDescription: string;
  transactionType: string;
  amountPaid: number;
  invoiceNumber: string;
  transactionDate: string;
  heavyMachinery: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
//errors
=======
=======
>>>>>>> feature/addAuthProcess
export interface ResponseByModel {
  id: number;
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
  createdAt: string;
  updatedAt: string;
  heavyMachineryId: number
}

export interface employeeItem {
  id?: number,
  firstName: string,
  lastName: string,
  address: string,
  age?: number,
  documentType: string,
  documentNumber: string,
  phoneNumber: string,
  email: string,
  dateOfBirth: string,
  startDate: string,
  position: string,
  attendance?: string,
  salary?: number,
  overtimeHours?: number,
  performance?: number,
  createdAt?: string,
  updatedAt?: string,
}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
