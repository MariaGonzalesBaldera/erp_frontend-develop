import { Grid, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { DocumentItem } from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ModalEditDocument from "../../ModalEditDocument";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import {
  useDeleteDocument,
  useGetDocumentByMachinery,
} from "../../../hooks/useDocuments";
import ModalDetailGeneric from "../../ModalDetailGeneric";
import { formatDayMonthYear } from "../../../utils/capitalize";

interface DocumentsProps {
  idMachinery: number;
}

const Documents: React.FC<DocumentsProps> = ({ idMachinery }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const { mutateAsync: mutationDeleteId } = useDeleteDocument();
  const [valueDelete, setValueDelete] = useState(0);

  const { data: machineryData } = useGetDocumentByMachinery({
    id: idMachinery,
  });
  console.log("DATA " + machineryData);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => {
    setOpenModalConfirm(false);
  };

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
      await mutationDeleteId(Number(valueDelete));
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
    <>
      <Grid sx={styleTableResponsive}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={styleTableItem}
            className="truncate..."
            hideFooter
            rows={machineryData || []}
            columns={columns}
          />
        </div>
      </Grid>

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
    </>
  );
};
export default Documents;
