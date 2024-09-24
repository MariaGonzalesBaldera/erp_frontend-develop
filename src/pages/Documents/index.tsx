import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
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
  Typography,
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
  heavyMachineryId: 0,
};
const Documents: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
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

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: DocumentItem) => {
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
      field: "technicalReviewsStart",
      headerName: "Inicio Revisiones técnicas",
      flex: 1,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => formatDayMonthYear(params.value),
    },
    {
      field: "technicalReviewsEnd",
      headerName: "Fin Revisiones técnicas",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => formatDayMonthYear(params.value),
    },
    {
      field: "soatStart",
      headerName: "Inicio del Soat",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => formatDayMonthYear(params.value),
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
        <Typography variant="button">{"LISTA DE DOCUMENTOS"}</Typography>
      <Grid
        container
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={1}
        className="p-2 border border-gray-400 bg-white mb-2 mt-2"
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

        <ModalEditDocument //boton de editar
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
          title="DETALLE DEL DOCUMENTO"
        />
        <ConfirmModal //boton de eliminar
          onConfirm={openModalConfirm}
          onCancel={handleCloseConfirmModal}
          onConfirmAction={handleDelete}
          id={Number(valueDelete)}
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
