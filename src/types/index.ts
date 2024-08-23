export interface MaquinariaDataItem {
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

export interface PreventMaintenanceItem {
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
    operatorName: string;
    projectName: string;
    observations: string;
    drivingStart: string;
    drivingEnd: string;
    heavyMachineryId: String;
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
    createdAt: string;
    updatedAt: string;
    heavyMachineryId: string;
}
export interface DocumentItem {
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


///props components
export interface HeaderPageProps {
    title: string,
    titleButton:string,
    handleOpen: () => void
}

export interface ModalEditDocumentProps {
    openModal: boolean;
    handleClose: () => void;
    data: DocumentItem;
    mode : string
  }

  export interface MaintenanceProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  export interface PreventMaintenanceProps{
    mode:string
  }

  export interface CorrectiveMaintenanceProps{
    mode:string
  }