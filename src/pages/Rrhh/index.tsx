import React, { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styleTableItem } from "../../style/StyleModal";
import ConfirmModal from "../../components/ConfirmModal";
import { UserItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ModalDetailUser from "../../components/ModalDetailUser";
import ModalEditUser from "../../components/ModalEditUser";
import { useGetEmployeeList,useDeleteEmployee } from "../../hooks/useEmployee";

const dataCreate = {
  id: 0,
  firstName:"",
  lastName: "",
  address:"",
  age: 0,
  documentType:"",
  documentNumber:"",
  phoneNumber:"",
  email:"",
  dateOfBirth:"",
  startDate:"",
  position:"",
  attendance:"",
  salary: 0,
  overtimeHours: 0,
  performance: 0,
};

const Rrhh: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const { mutateAsync: mutationDeleteId } = useDeleteEmployee();

  const { data: userData } = useGetEmployeeList();
  console.log("DATA " + JSON.stringify(userData, null, 2));

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };
 
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: UserItem) => {
    console.log("row: ", row);
    setSelectedRow(row);
    setOpenEdit(true);
  };

  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpenConfirmModal = () => setOpenModalConfirm(true);

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
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "documentNumber",
      headerName: "Numero de documento",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fullname",
      headerName: "Nombre Completo",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <span>
          {params.row.firstName} {params.row.lastName}
        </span>
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "position",
      headerName: "Pocisión",
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
      <HeaderPage
        title="LISTA DE USUARIOS"
        titleButton="NUEVO USUARIO"
        handleOpen={handleOpenNewModal}
      />
      
      <Grid style={{ height: 400,marginTop:"1rem" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={userData || []}
          columns={columns}
        />
      </Grid>
      <ModalEditUser //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalDetailUser //boton de detalle
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
      <ModalEditUser //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default Rrhh;
