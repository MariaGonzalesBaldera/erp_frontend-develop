<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetail from "../../ModalMoreDetail";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
import ModalEditMaintenance from "../../ModalEditMaintenance";
=======
=======
>>>>>>> feature/addAuthProcess
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
import {
  PreventMaintenanceItem,
  PreventMaintenanceProps,
} from "../../../types";
import ListIcon from "@mui/icons-material/List";
<<<<<<< HEAD
<<<<<<< HEAD
import ButtonDefault from "../../ButtonDefault";
import { styleTableItem } from "../../../style/StyleModal";
import SearchInput from "../../SearchInput";

const rows = [
  {
    id: 1,
    description: "Snow",
    maintenance_date: "2024-08-01",
    amount_paid: "2300 AM",
    operator: "Juanito Perez",
    project_name: "North Wall Project",
    observations: "Routine check",
    driving_start: "08:00 am",
    driving_end: "12:00 am",
  },
  {
    id: 2,
    description: "Lannister",
    maintenance_date: "2024-08-02",
    amount_paid: "1500 AM",
    operator: "Juanito Perez Juanito PerezJuanito Perez",
    project_name: "King's Landing",
    observations: "Emergency repair",
    driving_start: "10:00 AM",
    driving_end: "14:00 AM",
  },
  {
    id: 3,
    description: "Lannister",
    maintenance_date: "2024-08-03",
    amount_paid: "1800 AM",
    operator: "Juanito Perez",
    project_name: "Casterly Rock",
    observations: "Standard service",
    driving_start: "09:00 AM",
    driving_end: "13:00 AM",
  },
  {
    id: 4,
    description: "Stark",
    maintenance_date: "2024-08-04",
    amount_paid: "2000 AM",
    operator: "Juanito Perez",
    project_name: "Winterfell",
    observations: "Oil change",
    driving_start: "07:30 AM",
    driving_end: "11:30 AM",
  },
  {
    id: 5,
    description: "Targaryen",
    maintenance_date: "2024-08-05",
    amount_paid: "2100 AM",
    operator: "Juanito Perez",
    project_name: "Dragonstone",
    observations: "Operator training required",
    driving_start: "20:00 AM",
    driving_end: "23:00 AM",
  },
  {
    id: 6,
    description: "Melisandre",
    maintenance_date: "2024-08-06",
    amount_paid: "2100 AM",
    operator: "Juanito Perez",
    project_name: "Asshai",
    observations: "Inspection",
    driving_start: "08:30 AM",
    driving_end: "12:30 AM",
  },
];

const dataCreate = {
  id: "",
  description: "",
  maintenance_date: "",
  amount_paid: "",
  operator: "",
  project_name: "",
  observations: "",
  driving_start: "",
  driving_end: "",
  heavyMachineryId: "",
};

const PreventMaintenance: React.FC<PreventMaintenanceProps> = ({ mode }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

=======
=======
>>>>>>> feature/addAuthProcess
import { styleTableItem } from "../../../style/StyleModal";
import { useDeletePreventiveMaintenance, useGetPreventiveByMachinery } from "../../../hooks/usePreventiveMaintenance";
import ModalPreventDetail from "../../ModalPreventDetail";
import ModalEditPrevent from "../../ModalEditPrevent";

const PreventMaintenance: React.FC<PreventMaintenanceProps> = ({
  idMachinery,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [preventData, setDocumentsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);

  const { data: searchedDocumentsData } = useGetPreventiveByMachinery({
    id: idMachinery,
  });
  React.useEffect(() => {
    setLoading(true);
    try {
      if (searchedDocumentsData) {
        setDocumentsData(searchedDocumentsData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [searchedDocumentsData]);
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };
<<<<<<< HEAD
<<<<<<< HEAD

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);
=======
  const { mutateAsync: mutationDeleteId } = useDeletePreventiveMaintenance();
 
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  const { mutateAsync: mutationDeleteId } = useDeletePreventiveMaintenance();
 
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);
>>>>>>> feature/addAuthProcess

  const handleOpenEdit = (row: PreventMaintenanceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);
=======
=======
>>>>>>> feature/addAuthProcess
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);

  const handleOpenConfirmModal = () => setOpenModalConfirm(true);
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleDelete = async () => {
    try {
      await mutationDeleteId(valueDelete);
      console.log("Documento eliminado exitosamente");
    } catch (error) {
      console.log("Error al eliminar documento: ", error);
    }
  };
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      field: "operator",
      headerName: "Operador",
=======
      field: "periodType",
      headerName: "Tipo de período",
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
      field: "periodType",
      headerName: "Tipo de período",
>>>>>>> feature/addAuthProcess
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      field: "description",
      headerName: "Descripción",
=======
      field: "maintenancePeriod",
      headerName: "Período de mantenimiento",
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
      field: "maintenancePeriod",
      headerName: "Período de mantenimiento",
>>>>>>> feature/addAuthProcess
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      field: "project_name",
      headerName: "Nombre del proyecto",
=======
      field: "amountPaid",
      headerName: "Importe pagado",
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
      field: "amountPaid",
      headerName: "Importe pagado",
>>>>>>> feature/addAuthProcess
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

      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
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
<<<<<<< HEAD
              onClick={() => handleOpenDelete()}
=======
=======
>>>>>>> feature/addAuthProcess
              onClick={() => {
                setValueDelete(Number(params.id));
                handleOpenConfirmModal();
              }}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
      {mode == "page" ? (
         <Grid container spacing={2} alignItems="center" sx={{ pb: 1 }}>
         {/* SearchInput */}
         <Grid item xs={12} md={6}>
           <SearchInput />
         </Grid>
         
         {/* ButtonDefault */}
         <Grid item xs={12} md={6} sx={{ textAlign: { xs: "start", md: "end" } }} >
           <ButtonDefault
             onClick={handleOpenNewModal}
             title="Agregar mantenimiento"
           />
         </Grid>
       </Grid>
      ) : (
        <></>
      )}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={rows}
          columns={columns}
        />
      </div>

      <ModalEditMaintenance //boton de editar
=======
=======
>>>>>>> feature/addAuthProcess
      {loading ? (
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <CircularProgress /> {/* Indicador de carga */}
        </Grid>
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          {preventData.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                alignContent: "center",
                border: "1px gray solid",
                height: "8rem",
              }}
            >
              No se encontraron documentos de registro
            </div>
          ) : (
            <DataGrid
              sx={styleTableItem}
              className="truncate..."
              hideFooter
              rows={preventData}
              columns={columns}
            />
          )}
        </div>
      )}

      <ModalEditPrevent //boton de editar
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

<<<<<<< HEAD
<<<<<<< HEAD
      <ModalMoreDetail //boton de detalle
=======
      <ModalPreventDetail //boton de detalle
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
      <ModalPreventDetail //boton de detalle
>>>>>>> feature/addAuthProcess
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
<<<<<<< HEAD
<<<<<<< HEAD
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={1}
      />
      <ModalEditMaintenance //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
=======
=======
>>>>>>> feature/addAuthProcess
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
      />
    </>
  );
};
export default PreventMaintenance;
