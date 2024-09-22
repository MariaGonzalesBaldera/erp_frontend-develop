import { DataGrid, GridColDef } from "@mui/x-data-grid";
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { DocumentItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../components/ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ModalDocumentDetail from "../../components/ModalDocumentDetail";
import ModalEditDocument from "../../components/ModalEditDocument";
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import GroupRadioButton from "../../components/GroupRadioButton";
import ButtonDefault from "../../components/ButtonDefault";
import ButtonIconSearch from "../../components/ButtonIconSearch";

const rows = [
  {
    id: "1",
    technicalReviewsStart: "2024-01-01",
    technicalReviewsEnd: "2025-01-01",
    soatStart: "2024-02-01",
    soatEnd: "2025-02-01",
    insuranceStart: "2024-03-01",
    insuranceEnd: "2025-03-01",
    trekInsuranceStart: "2024-04-01",
    trekInsuranceEnd: "2025-04-01",
    operatingCertificateStart: "2024-05-01",
    operatingCertificateEnd: "2025-05-01",
    heavyMachineryId: "HM001",
  },
  {
    id: "2",
    technicalReviewsStart: "2024-02-15",
    technicalReviewsEnd: "2025-02-15",
    soatStart: "2024-03-15",
    soatEnd: "2025-03-15",
    insuranceStart: "2024-04-15",
    insuranceEnd: "2025-04-15",
    trekInsuranceStart: "2024-05-15",
    trekInsuranceEnd: "2025-05-15",
    operatingCertificateStart: "2024-06-15",
    operatingCertificateEnd: "2025-06-15",
    createdAt: "2024-08-02",
  },
  {
    id: "3",
    technicalReviewsStart: "2024-03-01",
    technicalReviewsEnd: "2025-03-01",
    soatStart: "2024-04-01",
    soatEnd: "2025-04-01",
    insuranceStart: "2024-05-01",
    insuranceEnd: "2025-05-01",
    trekInsuranceStart: "2024-06-01",
    trekInsuranceEnd: "2025-06-01",
    operatingCertificateStart: "2024-07-01",
    operatingCertificateEnd: "2025-07-01",
    heavyMachineryId: "HM003",
  },
];
const dataCreate = {
  id: "",
=======
=======
>>>>>>> feature/addAuthProcess
import React, {  useState } from "react";
import { DocumentItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import ConfirmModal from "../../components/ConfirmModal";
import ModalEditDocument from "../../components/ModalEditDocument";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import GroupRadioButton from "../../components/GroupRadioButton";
import ButtonDefault from "../../components/ButtonDefault";
import {
  useDeleteDocument,
  useGetDocumentByModel,
} from "../../hooks/useDocuments";
import { capitalizer, formatDayMonthYear } from "../../utils/capitalize";
import ModalDetailGeneric from "../../components/ModalDetailGeneric";

const dataCreate = {
  id: 0,
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  technicalReviewsStart: "",
  technicalReviewsEnd: "",
  soatStart: "",
  soatEnd: "",
  insuranceStart: "",
  insuranceEnd: "",
  trekInsuranceStart: "",
  trekInsuranceEnd: "",
  operatingCertificateStart: "",
  operatingCertificateEnd: "",
<<<<<<< HEAD
<<<<<<< HEAD
  heavyMachineryId: "",
=======
  heavyMachineryId: 0,
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  heavyMachineryId: 0,
>>>>>>> feature/addAuthProcess
};
const Documents: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

=======
=======
>>>>>>> feature/addAuthProcess
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);

  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const [selectedValue, setSelectedValue] = useState<string>("oruga");
  const { mutateAsync: mutationDeleteId } = useDeleteDocument();
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { data: searchedDocumentsData } = useGetDocumentByModel({
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
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);
>>>>>>> feature/addAuthProcess

  const handleOpenEdit = (row: DocumentItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/addAuthProcess
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
      field: "technicalReviewsStart",
      headerName: "Inicio Revisiones técnicas",
      flex: 1,
      minWidth: 200,
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
      field: "technicalReviewsEnd",
      headerName: "Fin Revisiones técnicas",
      flex: 1,
      minWidth: 120,
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
      field: "soatStart",
      headerName: "Inicio del Soat",
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
    <Box> 
        <Grid
          container
          justifyContent={"space-around"}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "start", sm: "center" }}
          gap={1}
          className="p-2  bg-white mb-2"
        >
        <Grid  item xs="auto" sm={4.5} order={{ xs: 2, sm: 1 }}>
          <GroupRadioButton />
        </Grid>
        <Grid item xs="auto" sm={4} order={{ xs: 3, sm: 2 }}>
          <ButtonIconSearch />
        </Grid>
        <Grid item xs="auto" sm={3}
       order={{ xs: 1, sm: 3 }}>
          <ButtonDefault
            onClick={() => console.log("first")}
            title="NUEVO DOCUMENTO"
          />
        </Grid>
      </Grid>
      <Grid sx={styleTableResponsive}>
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
    {
      title: "Inicio de revisiones técnicas",
      value: formatDayMonthYear(selectedRow.technicalReviewsStart),
    },
    {
      title: "Fin de revisiones técnicas",
      value: formatDayMonthYear(selectedRow.technicalReviewsEnd),
    },
    { title: "Inicio SOAT", value: formatDayMonthYear(selectedRow.soatStart) },
    { title: "Fin SOAT", value: formatDayMonthYear(selectedRow.soatEnd) },
    {
      title: "Inicio seguro",
      value: formatDayMonthYear(selectedRow.insuranceStart),
    },
    {
      title: "Fin seguro",
      value: formatDayMonthYear(selectedRow.insuranceEnd),
    },
    {
      title: "Inicio de seguro de viaje",
      value: formatDayMonthYear(selectedRow.trekInsuranceStart),
    },
    {
      title: "Fin de seguro de viaje",
      value: formatDayMonthYear(selectedRow.trekInsuranceEnd),
    },
    {
      title: "Inicio del certificado de funcionamiento",
      value: formatDayMonthYear(selectedRow.operatingCertificateStart),
    },
    {
      title: "Fin del certificado de funcionamiento",
      value: formatDayMonthYear(selectedRow.operatingCertificateEnd),
    },
    { title: "Código de la maquinaria", value: selectedRow.heavyMachineryId },
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
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO DOCUMENTO" />
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
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess

        <ModalEditDocument //boton de editar
          openModal={openEdit}
          handleClose={handleCloseEdit}
          data={selectedRow}
          mode="update"
        />

<<<<<<< HEAD
<<<<<<< HEAD
        <ModalDocumentDetail //boton de detalle
          openModal={openDetail}
          handleClose={handleClose}
          data={selectedRow}
        />

        <ConfirmModal //boton de eliminar
          onConfirm={openDelete}
          onCancel={handleCloseConfirmModal}
          id={1}
=======
=======
>>>>>>> feature/addAuthProcess
        <ModalDetailGeneric //boton de detalle
          openModal={openDetail}
          handleClose={handleClose}
          data={selectedRow}
          fields={fieldsDetail}
          title="DETALLE DEL DOCUMENTO"
        />
        <ConfirmModal //boton de eliminar
          onConfirm={openModalConfirm}
          onCancel={handleCloseConfirmModal}
          onConfirmAction={handleDelete}
          id={Number(valueDelete)}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
        />
      </Grid>
      <ModalEditDocument ///crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </Box>
  );
};

export default Documents;
