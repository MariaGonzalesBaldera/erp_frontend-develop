import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
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
import { styleTableItem } from "../../../style/StyleModal";
import {
  useDeleteCorrective,
  useGetCorrectiveByMachinery,
} from "../../../hooks/useCorrectiveMaintenance";
import ModalDetailGeneric from "../../ModalDetailGeneric";
import { formatDayMonthYear } from "../../../utils/capitalize";
import { Visibility } from "@mui/icons-material";
import ModalImageEvidence from "../../ModalImageEvidence";

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
  idMachinery,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);
  const { mutateAsync: mutationDeleteId } = useDeleteCorrective();
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const handleCloseImageModal = () => setOpenImage(false);

  const [loading, setLoading] = useState(false);
  const { data: correctiveData } = useGetCorrectiveByMachinery({
    id: idMachinery,
  });

  React.useEffect(() => {
    setLoading(true);
    try {
      if (correctiveData) {
        setDocumentsData(correctiveData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [correctiveData]);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: CorrectiveMaintananceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };

  const handleOpenImage = (row: CorrectiveMaintananceItem) => {
    console.log(row);
    setSelectedRow(row);
    setOpenImage(true);
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
      field: "operatorName",
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
      field: "projectName",
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
          <Tooltip title="Ver evidencia - imagen">
            <IconButton
              color="secondary"
              onClick={() => handleOpenImage(params.row)}
              aria-label="Imagen"
            >
              <Visibility />
            </IconButton>
          </Tooltip>
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
    { title: "Descripción", value: selectedRow.description },
    {
      title: "Fecha de mantenimiento",
      value: formatDayMonthYear(selectedRow.maintenanceDate),
    },
    { title: "Cantidad pagada", value: selectedRow.amountPaid },
    { title: "Número de factura", value: selectedRow.invoiceNumber },
    { title: "Nombre del operador", value: selectedRow.operatorName },
    { title: "Nombre del proyecto", value: selectedRow.projectName },
    { title: "Observaciones", value: selectedRow.observations },
    { title: "Inicio de manejo", value: selectedRow.drivingStart },
    { title: "Fin de manejo", value: selectedRow.drivingEnd },
    { title: "Código de maquinaria", value: selectedRow.heavyMachineryId },
  ];

  return (
    <>
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
              No se encontraron documentos registros
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

      <ModalEditMaintenance //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      {/* ModalMoreDetail */}
      <ModalDetailGeneric //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
        fields={fieldsDetail}
        title="DETALLE DEL MATENIMIENTO CORRECTIVO"
      />
      <ConfirmModal //boton de eliminar
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
      />
      <ModalImageEvidence //look image
        openModal={openImage}
        handleClose={handleCloseImageModal}
        id={selectedRow.id}
      />
    </>
  );
};

export default CorrectiveMaintenance;
