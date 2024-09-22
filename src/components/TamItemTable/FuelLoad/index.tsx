<<<<<<< HEAD
<<<<<<< HEAD
import { IconButton, Tooltip } from "@mui/material";
=======
import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
>>>>>>> feature/addAuthProcess
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { FuelLoadProps } from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
<<<<<<< HEAD
<<<<<<< HEAD
import ModalDocumentDetail from "../../ModalDocumentDetail";
import ModalEditDocument from "../../ModalEditDocument";
import { styleTableItem } from "../../../style/StyleModal";
import ModalEditFuelLoad from "../../ModalEditFuelLoad";
import ModalFuelLoadDetail from "../../ModalFuelLoadDetail";

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

const FuelLoad: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

=======
=======
>>>>>>> feature/addAuthProcess
import { styleTableItem, styleTableResponsive } from "../../../style/StyleModal";
import ModalEditFuelLoad from "../../ModalEditFuelLoad";
import {
  useDeleteFuelingUp,
  useGetFuelingUpByMachinery,
} from "../../../hooks/useFuelingUp";
import ModalDetailGeneric from "../../ModalDetailGeneric";
import { formatDayMonthYear } from "../../../utils/capitalize";

interface FuelLoadPropsItem {
  idMachinery: number;
}
const FuelLoad: React.FC<FuelLoadPropsItem> = ({ idMachinery }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const { mutateAsync: mutationDeleteId } = useDeleteFuelingUp();
  const [valueDelete, setValueDelete] = useState(0);
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { data: machineryData } = useGetFuelingUpByMachinery({
    id: idMachinery,
  });
  React.useEffect(() => {
    setLoading(true);
    try {
      if (machineryData) {
        setDocumentsData(machineryData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [machineryData]);
  console.log("DATA " + machineryData);

  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);
=======
  const handleCloseConfirmModal = () => {
    setOpenModalConfirm(false);
  };
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  const handleCloseConfirmModal = () => {
    setOpenModalConfirm(false);
  };
>>>>>>> feature/addAuthProcess

  const handleOpenEdit = (row: FuelLoadProps) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

=======
=======
>>>>>>> feature/addAuthProcess

  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpenConfirmModal = () => setOpenModalConfirm(true);

  const handleDelete = async () => {
    try {
      await mutationDeleteId(Number(valueDelete));
      console.log("Documento eliminado exitosamente");
    } catch (error) {
      console.log("Error al eliminar documento: ", error);
    }
  };
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      renderCell: (params) => formatDayMonthYear(params.value),
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
      renderCell: (params) => formatDayMonthYear(params.value),
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={() => handleOpenDelete()}
=======
=======
>>>>>>> feature/addAuthProcess
              onClick={() => {
                setValueDelete(Number(params.id));
                handleOpenConfirmModal();
              }}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
              aria-label="ELiminar"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={rows}
          columns={columns}
        />
      </div>
=======
=======
>>>>>>> feature/addAuthProcess
  const fieldsDetail = [
    { title: "Número de galones", value: selectedRow.numberGallons },
    { title: "Combustible kilometraje", value: selectedRow.fuelingMileage },
    {
      title: "Fecha de kilometraje",
      value: formatDayMonthYear(selectedRow.fuelingDate),
    },
    { title: "Cantidad Pagada", value: selectedRow.amountPaid },
    { title: "Número de factura", value: selectedRow.invoiceNumber },
    { title: "Código de la maquinaria", value: selectedRow.heavyMachineryId },
  ];
  return (
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
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess

      <ModalEditFuelLoad //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />
<<<<<<< HEAD
<<<<<<< HEAD

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
    </>
=======
=======
>>>>>>> feature/addAuthProcess
      <ModalDetailGeneric //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
        fields={fieldsDetail}
        title="DETALLE DEL REGISTRO"
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}
      />
    </Grid>
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  );
};

export default FuelLoad;
