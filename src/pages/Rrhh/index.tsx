import React, { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import SearchInput from "../../components/SearchInput";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styleTableItem } from "../../style/StyleModal";
import ModalEditInspector from "../../components/ModalEditInspector";
import ModalMoreDetailInspection from "../../components/ModalMoreDetailInspection";
import ConfirmModal from "../../components/ConfirmModal";
import { UserItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ModalDetailUser from "../../components/ModalDetailUser";
import ModalEditUser from "../../components/ModalEditUser";
import { useGetUserList,useDeleteUser } from "../../hooks/useAuthentication";
import { SearchSharp } from "@mui/icons-material";
import themeNew from "../../utils/theme";

const dataCreate = {
  id: 0,
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  role: "",
};

const Rrhh: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const { mutateAsync: mutationDeleteId } = useDeleteUser();

  const { data: userData } = useGetUserList();
  console.log("DATA " + userData);

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
      field: "username",
      headerName: "Usuario",
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
          {params.row.firstname} {params.row.lastname}
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
      field: "role",
      headerName: "Rol",
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
      {/* <Grid
        container
        gap={2}
        alignItems={"center"}
        order={{ xs: 2, sm: 1 }}
      >
        <SearchInput title="Ingresa el código de usuario" />
        <SearchSharp
          sx={{
            border: `1px ${themeNew.palette.primary.main} solid`,
            width: 45,
            height: 40,
            padding: 0.8,
            cursor: "pointer",
            borderRadius: 1,
            "&:hover": {
              color: "#e2e0ff",
              backgroundColor: themeNew.palette.primary.main,
            },
          }}
          onClick={() => console.log("first")}
        />
      </Grid> */}

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
