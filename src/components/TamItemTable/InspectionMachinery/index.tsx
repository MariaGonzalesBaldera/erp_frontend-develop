<<<<<<< HEAD
import { IconButton, Tooltip } from "@mui/material";
=======
import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetailInspection from "../../ModalMoreDetailInspection";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
<<<<<<< HEAD
import { MachineryInspectionItem } from "../../../types";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ModalEditInspector from "../../ModalEditInspector";
import { styleTableItem } from "../../../style/StyleModal";

const rows = [
  {
    projectName: "Proyecto B",
    unitData: "Bulldozer D8T",
    activity: "Nivelación de terreno",
    location: "Arequipa, Perú",
    registrationDate: "2024-08-02",
    frontLights: false,
    rearLights: true,
    directionalLights: true,
    rolloverProtection: true,
    seatbelt: false,
    bucketConditionAndOperation: true,
    seatCondition: true,
    windows: false,
    cabin: true,
    reverseAlarm: true,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: false,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: false,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: false,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: false,
    swingMechanismBrake: true,
    armLiftControls: false,
    rightTrack: true,
    leftTrack: true,
    spillKit: true,
    fireExtinguisher20Lbs: true,
    safetyCones: true,
    operator: "Luis Fernández",
    residentEngineer: "María Torres Maldonado Silva",
    ssoma: "Jorge Quispe",
    observations: "Falta reemplazar luces frontales y cinturón de seguridad",
    createdAt: "2024-08-02",
    updatedAt: "2024-08-02",
    heavyMachineryId: "HM-001",
  },
  {
    projectName: "Proyecto B",
    unitData: "Bulldozer D8T",
    activity: "Nivelación de terreno",
    location: "Arequipa, Perú",
    registrationDate: "2024-08-02",
    frontLights: false,
    rearLights: true,
    directionalLights: true,
    rolloverProtection: true,
    seatbelt: false,
    bucketConditionAndOperation: true,
    seatCondition: true,
    windows: false,
    cabin: true,
    reverseAlarm: true,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: true,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: true,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: true,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: true,
    swingMechanismBrake: true,
    armLiftControls: true,
    rightTrack: true,
    leftTrack: true,
    spillKit: true,
    fireExtinguisher20Lbs: true,
    safetyCones: true,
    operator: "Luis Fernández",
    residentEngineer: "María Torres",
    ssoma: "Jorge Quispe",
    observations: "Falta reemplazar luces frontales y cinturón de seguridad",
    createdAt: "2024-08-02",
    updatedAt: "2024-08-02",
    heavyMachineryId: "HM-002",
  },
  {
    projectName: "Proyecto C",
    unitData: "Retroexcavadora 416F2",
    activity: "Excavación de zanjas",
    location: "Cusco, Perú",
    registrationDate: "2024-08-03",
    frontLights: true,
    rearLights: true,
    directionalLights: false,
    rolloverProtection: true,
    seatbelt: true,
    bucketConditionAndOperation: true,
    seatCondition: true,
    windows: true,
    cabin: false,
    reverseAlarm: false,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: true,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: true,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: true,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: true,
    swingMechanismBrake: true,
    armLiftControls: true,
    rightTrack: false,
    leftTrack: false,
    spillKit: true,
    fireExtinguisher20Lbs: false,
    safetyCones: true,
    operator: "Pedro Castillo",
    residentEngineer: "Lucía Ramírez",
    ssoma: "Fernando Morales",
    observations: "Reemplazar extintor y revisar alarmas de retroceso",
    createdAt: "2024-08-03",
    updatedAt: "2024-08-03",
    heavyMachineryId: "HM-003",
  },
  {
    projectName: "Proyecto D",
    unitData: "Cargador Frontal 950GC",
    activity: "Carga de material",
    location: "Trujillo, Perú",
    registrationDate: "2024-08-04",
    frontLights: true,
    rearLights: false,
    directionalLights: true,
    rolloverProtection: true,
    seatbelt: true,
    bucketConditionAndOperation: false,
    seatCondition: true,
    windows: true,
    cabin: true,
    reverseAlarm: true,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: true,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: true,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: true,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: true,
    swingMechanismBrake: true,
    armLiftControls: true,
    rightTrack: true,
    leftTrack: true,
    spillKit: true,
    fireExtinguisher20Lbs: true,
    safetyCones: true,
    operator: "Mario Rojas",
    residentEngineer: "Patricia Vega",
    ssoma: "Sara Quinteros",
    observations: "Revisar condición del balde",
    createdAt: "2024-08-04",
    updatedAt: "2024-08-04",
    heavyMachineryId: "HM-004",
  },
  {
    projectName: "Proyecto E",
    unitData: "Grúa RT765",
    activity: "Movimiento de cargas pesadas",
    location: "Piura, Perú",
    registrationDate: "2024-08-05",
    frontLights: true,
    rearLights: true,
    directionalLights: true,
    rolloverProtection: true,
    seatbelt: true,
    bucketConditionAndOperation: true,
    seatCondition: false,
    windows: true,
    cabin: true,
    reverseAlarm: true,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: true,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: true,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: true,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: true,
    swingMechanismBrake: true,
    armLiftControls: true,
    rightTrack: true,
    leftTrack: true,
    spillKit: true,
    fireExtinguisher20Lbs: true,
    safetyCones: true,
    operator: "Rafael Díaz",
    residentEngineer: "Laura Herrera",
    ssoma: "Alberto Pérez",
    observations: "Reemplazar asiento del operador",
    createdAt: "2024-08-05",
    updatedAt: "2024-08-05",
    heavyMachineryId: "HM-005",
  },
  {
    projectName: "Proyecto F",
    unitData: "Camión Volquete",
    activity: "Transporte de material",
    location: "Chiclayo, Perú",
    registrationDate: "2024-08-06",
    frontLights: false,
    rearLights: true,
    directionalLights: false,
    rolloverProtection: true,
    seatbelt: true,
    bucketConditionAndOperation: true,
    seatCondition: true,
    windows: false,
    cabin: true,
    reverseAlarm: true,
    accessLadderAndSupports: true,
    mirrors: true,
    horn: true,
    controlLevers: true,
    pedals: true,
    liftCylinders: true,
    articulationCylinders: true,
    doorConditionWithLock: true,
    battery: true,
    electricalInstallation: true,
    steering: true,
    engine: true,
    radiator: true,
    indicators: true,
    brakingSystem: true,
    oilCooler: true,
    hydraulicSystemBlock: true,
    hoses: true,
    belts: true,
    electricalSystem: true,
    swingMechanism: true,
    swingMechanismBrake: true,
    armLiftControls: true,
    rightTrack: true,
    leftTrack: true,
    spillKit: true,
    fireExtinguisher20Lbs: false,
    safetyCones: true,
    operator: "Andrés Zambrano",
    residentEngineer: "Diana Montenegro",
    ssoma: "Javier Rivera",
    observations: "Revisar luces direccionales y extintor",
    createdAt: "2024-08-06",
    updatedAt: "2024-08-06",
    heavyMachineryId: "HM-006",
  },
];

const InspectionMachinery: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
=======
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ModalEditInspector from "../../ModalEditInspector";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import {
  useDeleteInspection,
  useGetInspectionByMachinery,
} from "../../../hooks/useMachineryInspection";
import { InspectionResponse } from "../../../domain/machinery.interface";

interface InspectionMachineryProps {
  idMachinery: number;
}
const InspectionMachinery: React.FC<InspectionMachineryProps> = ({
  idMachinery,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const { mutateAsync: mutationDeleteId } = useDeleteInspection();
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const { data: machineryData } = useGetInspectionByMachinery({
    id: idMachinery,
  });
 

  React.useEffect(() => {
    setLoading(true);
    try {
      if (machineryData) {
        setDocumentsData(machineryData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [machineryData]);


>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

<<<<<<< HEAD
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: MachineryInspectionItem) => {
=======
  const handleCloseConfirmModal = () => {
    setOpenModalConfirm(false);
  };

  const handleOpenEdit = (row: InspectionResponse) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

<<<<<<< HEAD
=======
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpenConfirmModal = () => setOpenModalConfirm(true);

  const handleDelete = async () => {
    try {
      await mutationDeleteId(Number(valueDelete));
      console.log("Documento eliminado exitosamente");
    } catch (error) {
      console.log("Error al eliminar documento: ", error);
    }
  };
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  const columns: GridColDef[] = [
    {
      field: "heavyMachineryId",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "projectName",
      headerName: "Nombre del Proyecto",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "unitData",
      headerName: "Datos de unidad",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "activity",
      headerName: "Actividad",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 150,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <Tooltip title="Editar">
            <IconButton
              color="success"
              onClick={() => handleOpenEdit(params.row)}
              aria-label="Editar"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Detalle">
            <IconButton
              color="warning"
              onClick={() => handleOpen(params.row)}
              aria-label="Ver detalles"
            >
              <ListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ELiminar">
            <IconButton
              color="error"
<<<<<<< HEAD
              onClick={() => handleOpenDelete()}
=======
              onClick={() => {
                setValueDelete(Number(params.id));
                handleOpenConfirmModal();
              }}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
              aria-label="ELiminar"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
<<<<<<< HEAD
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={rows}
          columns={columns}
          getRowId={(row) => row.heavyMachineryId}
        />
      </div>
=======
      <Grid sx={styleTableResponsive}>
      {loading ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <CircularProgress /> {/* Indicador de carga */}
          </Grid>
        ) : (
          <div style={{ height: 400, width: "100%" }}>
            {documentsData.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  alignContent: "center",
                  border: "1px gray solid",
                  height: "8rem",
                }}
              >
                No se encontraron registros
              </div>
            ) : (
              <DataGrid
                sx={styleTableItem}
                className="truncate..."
                hideFooter
                rows={documentsData}
                columns={columns}
              />
            )}
          </div>
        )}
      </Grid>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
      <ModalEditInspector //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
<<<<<<< HEAD
=======
        mode="update"
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
      />

      <ModalMoreDetailInspection //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />
      <ConfirmModal //boton de eliminar
<<<<<<< HEAD
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={1}
=======
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
      />
    </>
  );
};

export default InspectionMachinery;
