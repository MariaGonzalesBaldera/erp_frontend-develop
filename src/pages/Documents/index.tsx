import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useCallback, useState } from "react";
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
import {
  useGetDocumentList,
  useDeleteDocument,
} from "../../hooks/useDocuments";
import { SearchSharp } from "@mui/icons-material";
import themeNew from "../../utils/theme";

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

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);
  const { mutateAsync: mutationDeleteId } = useDeleteDocument();
  const [valueDelete, setValueDelete] = useState(0);

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    console.log(value)
    setSelectedValue(value);
  };

  const { data: documentsData } = useGetDocumentList();
  console.log("DATA " + JSON.stringify(documentsData, null, 2));

  const searchByModel = () => {
    
  };

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: DocumentItem) => {
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
        <Grid container xs="auto" gap={2} alignItems={"center"} order={{ xs: 2, sm: 1 }}>
          <GroupRadioButton
            showTitle={false}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
          <SearchSharp
            sx={{
              border: `1px ${themeNew.palette.primary.main} solid`,
              width: 45,
              height: 40,
              padding: 0.8,
              cursor: "pointer",
              borderRadius: 1,
              "&:hover": {
                color: "#e2e0ff",
                backgroundColor: themeNew.palette.primary.main,
              },
            }}
            onClick={searchByModel}
          />
        </Grid>
        {/* <Grid item xs="auto" order={{ xs: 3, sm: 2 }}>
          <SearchSharp
            sx={{
              border: `1px ${themeNew.palette.primary.main} solid`,
              width: 45,
              height: 40,
              padding: 0.8,
              cursor: "pointer",
              borderRadius: 1,
              "&:hover": {
                color: "#e2e0ff",
                backgroundColor: themeNew.palette.primary.main,
              },
            }}
            onClick={searchByModel}
          />
        </Grid> */}
        <Grid item xs="auto" order={{ xs: 1, sm: 3 }}>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO DOCUMENTO" />
        </Grid>
      </Grid>
      <Grid sx={styleTableResponsive}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={styleTableItem}
            className="truncate..."
            hideFooter
            rows={documentsData || []}
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
