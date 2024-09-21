import React, { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import ConfirmModal from "../../components/ConfirmModal";
import { UserItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ModalEditUser from "../../components/ModalEditUser";
import { useGetEmployeeList,useDeleteEmployee } from "../../hooks/useEmployee";
import ModalDetailGeneric from "../../components/ModalDetailGeneric";
import { calcularEdad, formatDayMonthYear } from "../../utils/capitalize";
import ModalRrhhEdit from "../../components/ModalRrhhEdit";

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
  const [documentsData, setDocumentsData] = useState<any[]>([]);

  const { mutateAsync: mutationDeleteId } = useDeleteEmployee();
  const [loading, setLoading] = useState(false);

  const { data: userData } = useGetEmployeeList();

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

  
  const fieldsDetail = [
    { title: "Primer Nombre:", value: selectedRow.firstName },
    { title: "Apellido:", value: selectedRow.lastName },
    { title: "Dirección:", value: selectedRow.address },
    { title: "Edad:", value: calcularEdad(selectedRow.dateOfBirth) },
    { title: "Tipo de documento:", value: selectedRow.documentType },
    { title: "Número de documento:", value: selectedRow.documentNumber },
    { title: "Número tefefónico:", value: selectedRow.phoneNumber },
    { title: "Correo:", value: selectedRow.email },
    { title: "Fecha de nacimiento:", value: formatDayMonthYear(selectedRow.dateOfBirth) },
    { title: "Fecha de inicio:", value: formatDayMonthYear(selectedRow.startDate) },
    { title: "Posición:", value: selectedRow.position },
    { title: "Asistencia:", value: selectedRow.attendance },
    { title: "Salary:", value: selectedRow.salary },
    { title: "Horas extras:", value: selectedRow.overtimeHours },
    { title: "Rendimiento:", value: selectedRow.performance },

  ];

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
      <ModalRrhhEdit //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalDetailGeneric //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
        fields={fieldsDetail}
        title="DETALLE DEL USUARIO"
      />
      <ConfirmModal //boton de eliminar
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
      />
      <ModalRrhhEdit //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default Rrhh;
