import {
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetailInspection from "../../components/ModalMoreDetailInspection";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import { MachineryInspectionItem } from "../../types";
import ConfirmModal from "../../components/ConfirmModal";
import ModalEditInspector from "../../components/ModalEditInspector";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import ButtonDefault from "../../components/ButtonDefault";
import { useDeleteInspection, useGetInspectionByModel } from "../../hooks/useMachineryInspection";
import GroupRadioButton from "../../components/GroupRadioButton";
import { capitalizer } from "../../utils/capitalize";
import { InspectionResponse } from "../../domain/machinery.interface";

const dataCreate = {
  projectName: "",
  unitData: "",
  activity: "",
  location: "",
  registrationDate: "",
  frontLights: false,
  rearLights: false,
  directionalLights: false,
  rolloverProtection: false,
  seatbelt: false,
  bucketConditionAndOperation: false,
  seatCondition: false,
  windows: false,
  cabin: false,
  reverseAlarm: false,
  accessLadderAndSupports: false,
  mirrors: false,
  horn: false,
  controlLevers: false,
  pedals: false,
  liftCylinders: false,
  articulationCylinders: false,
  doorConditionWithLock: false,
  battery: false,
  electricalInstallation: false,
  steering: false,
  engine: false,
  radiator: false,
  indicators: false,
  brakingSystem: false,
  oilCooler: false,
  hydraulicSystemBlock: false,
  hoses: false,
  belts: false,
  electricalSystem: false,
  swingMechanism: false,
  swingMechanismBrake: false,
  armLiftControls: false,
  rightTrack: false,
  leftTrack: false,
  spillKit: false,
  fireExtinguisher20Lbs: false,
  safetyCones: false,
  operator: "",
  residentEngineer: "",
  ssoma: "",
  observations: "",
  createdAt: "",
  updatedAt: "",
  heavyMachineryId: 0,
};

const Inspections: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const [selectedValue, setSelectedValue] = useState<string>("oruga");

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: MachineryInspectionItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);
  const [valueDelete, setValueDelete] = useState(0);
  const { mutateAsync: mutationDeleteId } = useDeleteInspection();
  const [rowsWithIds, setRowsWithIds] = useState<InspectionResponse[]>([]);

  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpenConfirmModal = () => setOpenModalConfirm(true);
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { data: searchedDocumentsData } = useGetInspectionByModel({
    model: selectedValue,
  });

  React.useEffect(() => {
    setLoading(true);
    try {
      if (searchedDocumentsData) {
        const dataWithIds = searchedDocumentsData.map((item, index) => ({
          ...item,
          id: index + 1, // Agregar ID numérico único
        }));
        setRowsWithIds(dataWithIds);

        setDocumentsData(dataWithIds);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [searchedDocumentsData]);
 
  const handleRadioChange = (value: string) => {
    console.log(value);
    setSelectedValue(value);
  };
  const handleDelete = async () => {
    try {
      await mutationDeleteId(valueDelete);
      console.log("Documento eliminado exitosamente");
    } catch (error) {
      console.log("Error al eliminar documento: ", error);
    }
  };
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
              onClick={() => {
                setValueDelete(Number(params.id));
                handleOpenConfirmModal();
              }}
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
      <Grid
        container
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={1}
        className="p-2 border border-gray-400 bg-white mb-2"
      >
        <Grid
          container
          xs="auto"
          gap={2}
          alignItems={"center"}
          order={{ xs: 2, sm: 1 }}
        >
          <GroupRadioButton
            showTitle={false}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs="auto" order={{ xs: 1, sm: 3 }}>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO DOCUMENTO" />
        </Grid>
      </Grid>


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
                No se encontraron documentos de {capitalizer(selectedValue)}
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


      <ModalEditInspector //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalMoreDetailInspection //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />
      <ConfirmModal //boton de eliminar
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
      />
      <ModalEditInspector //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default Inspections;
