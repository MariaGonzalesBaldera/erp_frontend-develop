import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { styleTableItem } from "../../../style/StyleModal";
import ConfirmModal from "../../ConfirmModal";
import { Box, CircularProgress, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import { PreventMaintenanceItem } from "../../../types";
import {
  useGetPreventiveByModel,
  useDeletePreventiveMaintenance,
} from "../../../hooks/usePreventiveMaintenance";
import ButtonDefault from "../../ButtonDefault";
import GroupRadioButton from "../../GroupRadioButton";
import { capitalizer } from "../../../utils/capitalize";
import ModalEditPrevent from "../../ModalEditPrevent";
import ModalPreventDetail from "../../ModalPreventDetail";

const dataCreate = {
  id: 0,
  motorOil: false,
  oilFilters: false,
  fuelFilters: false,
  airFilters: false,
  transmissionOil: false,
  periodType: "",
  maintenancePeriod: "",
  maintenanceDate: "",
  nextMaintenancePeriod: "",
  amountPaid: 0,
  invoiceNumber: "",
  observations: "",
  heavyMachineryId: 0,
};

const PreventMaintenancePage: React.FC = ({}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("oruga");
  const [preventData, setDocumentsData] = useState<any[]>([]);
  const { data: searchedDocumentsData } = useGetPreventiveByModel({
    model: selectedValue,
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
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  const { mutateAsync: mutationDeleteId } = useDeletePreventiveMaintenance();

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: PreventMaintenanceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

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
    <Box>
      <Grid
        container
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={1}
        className="p-2 border border-gray-400 bg-white mb-2 mt-2"
      >
        <Grid
          container
          xs="auto"
          gap={2}
          alignItems={"center"}
          order={{ xs: 2, sm: 1 }}
        >
          <GroupRadioButton
            showTitle={false}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item order={{ xs: 1, sm: 3 }}>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO MANTENIMIENTO" />
        </Grid>
      </Grid>

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
              No se encontraron documentos de {capitalizer(selectedValue)}
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
      <ModalEditPrevent //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </Box>
  );
};

export default PreventMaintenancePage;
