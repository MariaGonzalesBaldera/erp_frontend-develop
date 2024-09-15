import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetail from "../../ModalMoreDetail";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
import ModalEditMaintenance from "../../ModalEditMaintenance";
import {
  PreventMaintenanceItem,
  PreventMaintenanceProps,
} from "../../../types";
import ListIcon from "@mui/icons-material/List";
import { styleTableItem } from "../../../style/StyleModal";
import { useGetPreventiveByMachinery } from "../../../hooks/usePreventiveMaintenance";

const dataCreate = {
  id: "",
  motorOil: false,
  oilFilters: false,
  fuelFilters: false,
  airFilters: false,
  transmissionOil: false,
  periodType: "",
  maintenancePeriod: "",
  maintenanceDate: "",
  nextMaintenancePeriod: "",
  amountPaid: "",
  invoiceNumber: "",
  observations: "",
  heavyMachineryId: "",
};

const PreventMaintenance: React.FC<PreventMaintenanceProps> = ({
  idMachinery,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const { data: preventData } = useGetPreventiveByMachinery({
    id: idMachinery,
  });
  console.log("DATA " + JSON.stringify(preventData, null, 2));

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: PreventMaintenanceItem) => {
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
      field: "periodType",
      headerName: "Tipo de período",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "maintenancePeriod",
      headerName: "Período de mantenimiento",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amountPaid",
      headerName: "Importe pagado",
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
      {/* {mode == "page" ? (
        <Grid container spacing={2} alignItems="center" sx={{ pb: 1 }}>
          <Grid item xs={12} md={6}>
            <SearchInput title="Ingresa el código de la maquinaria" />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "start", md: "end" } }}
          >
            <ButtonDefault
              onClick={handleOpenNewModal}
              title="Agregar mantenimiento"
            />
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
       */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={preventData || []}
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
        id={selectedRow.id}
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
export default PreventMaintenance;
