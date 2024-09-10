import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetail from "../../ModalMoreDetail";
import {
  CorrectiveMaintananceItem,
  CorrectiveMaintenanceProps,
} from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEditMaintenance from "../../ModalEditMaintenance";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ButtonDefault from "../../ButtonDefault";
import { styleTableItem } from "../../../style/StyleModal";
import SearchInput from "../../SearchInput";

const rows = [
  {
    id: 1,
    description: "Nueva descripcion",
    maintenance_date: "2024-08-01",
    amount_paid: "123",
    operator: "Pepito Gomez",
    project_name: "Proyecto de la playa",
    observations: "Routine check",
    driving_start: "08:00 am",
    driving_end: "12:00 am",
  },
  {
    id: 2,
    description: "Nueva des",
    maintenance_date: "2024-08-02",
    amount_paid: "200 am",
    operator: "Juanito Perez Juanito PerezJuanito Perez",
    project_name: "King's Landing",
    observations: "Es urgente",
    driving_start: "10:00 am",
    driving_end: "14:00 am",
  },
  {
    id: 3,
    description: "Lannister",
    maintenance_date: "2024-08-03",
    amount_paid: "1800 am",
    operator: "Juanito Perez",
    project_name: "Casa de las rocas",
    observations: "Standard service",
    driving_start: "09:00 am",
    driving_end: "13:00 am",
  },
  {
    id: 4,
    description: "Stark",
    maintenance_date: "2024-08-04",
    amount_paid: "2000 am",
    operator: "Juanito Perez",
    project_name: "Winterfell",
    observations: "Oil change",
    driving_start: "07:30 am",
    driving_end: "11:30 am",
  },
  {
    id: 5,
    description: "Targaryen",
    maintenance_date: "2024-08-05",
    amount_paid: "2000 am",
    operator: "Juanito Perez",
    project_name: "Dragonstone",
    observations: "Operator training required",
    driving_start: "08:30 am",
    driving_end: "2:30 am",
  },
  {
    id: 6,
    description: "Melisandre",
    maintenance_date: "2024-08-06",
    amount_paid: "2100 am",
    operator: "Juanito Perez",
    project_name: "Asshai",
    observations: "Inspection",
    driving_start: "08:30 am",
    driving_end: "12:30 am",
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
const CorrectiveMaintenance: React.FC<CorrectiveMaintenanceProps> = ({
  idMachinery, mode
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: CorrectiveMaintananceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "operator",
      headerName: "Operador",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Descripción",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "project_name",
      headerName: "Nombre del proyecto",
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
              onClick={() => handleOpenDelete()}
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
      {mode == "page" ? (
        <Grid container spacing={2} alignItems="center" sx={{ pb: 1 }}>
        {/* SearchInput */}
        <Grid item xs={12} md={6}>
          <SearchInput   />
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
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalMoreDetail //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={1}
      />
      <ModalEditMaintenance //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default CorrectiveMaintenance;
