import React, { useState } from "react";
import { FuelLoadProps } from "../../types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import ModalEditFuelLoad from "../../components/ModalEditFuelLoad";
import ModalFuelLoadDetail from "../../components/ModalFuelLoadDetail";
import ConfirmModal from "../../components/ConfirmModal";

import {
  useDeleteFuelingUp,
  useGetFuelingUpByModel,
} from "../../hooks/useFuelingUp";
import { capitalizer } from "../../utils/capitalize";
import GroupRadioButton from "../../components/GroupRadioButton";
import ButtonDefault from "../../components/ButtonDefault";

const dataCreate = {
  id: 0,
  numberGallons: 0,
  fuelingMileage: "",
  fuelingDate: "",
  amountPaid: 0,
  invoiceNumber: "",
  heavyMachineryId: 0,
};
const FuelRegister: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("oruga");
  const [documentsData, setDocumentsData] = useState<any[]>([]);

  const { data: searchedDocumentsData } = useGetFuelingUpByModel({
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
    console.log(value);
    setSelectedValue(value);
  };

  const { mutateAsync: mutationDeleteId } = useDeleteFuelingUp();

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: FuelLoadProps) => {
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
      field: "numberGallons",
      headerName: "Número de galones",
      flex: 1,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingMileage",
      headerName: "Millaje de Abastecimiento",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingDate",
      headerName: "Fecha de Abastecimiento",
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
        className="p-2 border border-gray-400 bg-white mb-2"
      >
        <Grid item gap={2} alignItems={"center"}>
          <GroupRadioButton
            showTitle={false}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO REGISTRO" />
        </Grid>
      </Grid>
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
                No se encontraron documentos de {capitalizer(selectedValue)}
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
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
      />
      <ModalEditFuelLoad //boton de editar
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </Box>
  );
};

export default FuelRegister;
