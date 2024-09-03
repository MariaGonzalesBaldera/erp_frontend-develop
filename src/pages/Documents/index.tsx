import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { DocumentItem } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../components/ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import ModalDocumentDetail from "../../components/ModalDocumentDetail";
import ModalEditDocument from "../../components/ModalEditDocument";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import HeaderPage from "../../components/HeaderPage";
import SearchInput from "../../components/SearchInput";
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
  heavyMachineryId: "",
};
const Documents: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: DocumentItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

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
    },
    {
      field: "technicalReviewsEnd",
      headerName: "Fin Revisiones técnicas",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "soatStart",
      headerName: "Inicio del Soat",
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
              onClick={() => handleOpenDelete()}
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
      {/* <HeaderPage
        title="LISTA DE DOCUMENTOS"
        titleButton="NUEVO DOCUMENTO"
        handleOpen={handleOpenNewModal}
      /> */}
        <Grid
          container
          justifyContent={"space-between"}
          direction={{ xs: "column-reverse", sm: "row" }}
          alignItems={{ xs: "start", sm: "center" }}
          spacing={2}
          gap={1}
          className="p-4"
        >
        <Grid  xs="auto" sm={4.5}>
          <GroupRadioButton />
        </Grid>
        <Grid  xs="auto" sm={4}>
          {/* <SearchInput /> */}
          <ButtonIconSearch />
        </Grid>
        <Grid  xs="auto" sm={3} 
        justifySelf={{ xs: "end", sm: "end" }}>
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

        <ModalEditDocument //boton de editar
          openModal={openEdit}
          handleClose={handleCloseEdit}
          data={selectedRow}
          mode="update"
        />

        <ModalDocumentDetail //boton de detalle
          openModal={openDetail}
          handleClose={handleClose}
          data={selectedRow}
        />

        <ConfirmModal //boton de eliminar
          onConfirm={openDelete}
          onCancel={handleCloseConfirmModal}
          id={1}
        />
      </Grid>
      <ModalEditDocument ///crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default Documents;
