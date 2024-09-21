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
import {
  PreventMaintenanceItem,
  PreventMaintenanceProps,
} from "../../../types";
import ListIcon from "@mui/icons-material/List";
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
  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };
  const { mutateAsync: mutationDeleteId } = useDeletePreventiveMaintenance();
 
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: PreventMaintenanceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
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
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalPreventDetail //boton de detalle
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
    </>
  );
};
export default PreventMaintenance;
