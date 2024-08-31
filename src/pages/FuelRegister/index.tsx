import React, { useState } from "react";
import { FuelLoadProps } from "../../types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import { styleTableItem } from "../../style/StyleModal";
import ModalEditFuelLoad from "../../components/ModalEditFuelLoad";
import ModalFuelLoadDetail from "../../components/ModalFuelLoadDetail";
import ConfirmModal from "../../components/ConfirmModal";
import HeaderPage from "../../components/HeaderPage";
import SearchInput from "../../components/SearchInput";

const rows = [
  {
    id: "1",
    numberGallons: 150.5,
    fuelingMileage: "45789",
    fuelingDate: "2024-08-15",
    amountPaid: 575.75,
    invoiceNumber: "INV-20240815-001",
    heavyMachineryId: "HM-982374",
  },
  {
    id: "2",
    numberGallons: 220.3,
    fuelingMileage: "58342",
    fuelingDate: "2024-08-10",
    amountPaid: 845.9,
    invoiceNumber: "INV-20240810-002",
    heavyMachineryId: "HM-782341",
  },
  {
    id: "3",
    numberGallons: 175.0,
    fuelingMileage: "62450",
    fuelingDate: "2024-08-20",
    amountPaid: 690.25,
    invoiceNumber: "INV-20240820-003",
    heavyMachineryId: "HM-182345",
  },
];
const dataCreate = {
  id: "",
  numberGallons: 0,
  fuelingMileage: "",
  fuelingDate: "",
  amountPaid: 0,
  invoiceNumber: "",
  heavyMachineryId: "",
};
const FuelRegister: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: FuelLoadProps) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);



  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "numberGallons",
      headerName: "Número de galones",
      flex: 1,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingMileage",
      headerName: "Combustible kilometraje",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingDate",
      headerName: "Fecha abastecimiento de combustible",
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
      <HeaderPage
        title="LISTA DE REGISTROS"
        titleButton="NUEVO REGISTRO"
        handleOpen={handleOpenNewModal}
      />
      <SearchInput />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={rows}
          columns={columns}
        />
      </div>

      <ModalEditFuelLoad //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalFuelLoadDetail //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={1}
      />
      <ModalEditFuelLoad //boton de editar
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default FuelRegister;
