import React, { useState } from "react";
import { UserItem } from "../../types";
import { useDeleteUser, useGetUserList } from "../../hooks/useAuthentication";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import HeaderPage from "../../components/HeaderPage";
import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import ModalEditUser from "../../components/ModalEditUser";
import ModalDetailUser from "../../components/ModalDetailUser";
import ConfirmModal from "../../components/ConfirmModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ChangePassword from "../../components/ChangePassword";

const dataCreate = {
  id: 0,
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  role: "",
};

const UserManagement: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);
  const [documentsData, setDocumentsData] = useState<any[]>([]);

  const { mutateAsync: mutationDeleteId } = useDeleteUser();
  const [loading, setLoading] = useState(false);

  const { data: userData } = useGetUserList();
  React.useEffect(() => {
    setLoading(true);
    try {
      if (userData) {
        setDocumentsData(userData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [userData]);

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
  const [openChangePassword, setOpenChangePassword] = useState<boolean>(false);
  const handleCloseChangePassword = (): void => setOpenChangePassword(false);

  const handleOpenChangePassword = (): void => {
    setOpenEdit(false); // Cerrar ModalEditUser
    setOpenChangePassword(true); // Abrir ModalChangePassword
  };
  return (
    <>
      <HeaderPage
        title="LISTA DE USUARIOS"
        titleButton="NUEVO USUARIO"
        handleOpen={handleOpenNewModal}
      />
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
      <ModalEditUser //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
        onChangePassword={handleOpenChangePassword}
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
      <ChangePassword
        openModal={openChangePassword}
        handleClose={handleCloseChangePassword}
        id={selectedRow.id}
      />
    </>
  );
};

export default UserManagement;
