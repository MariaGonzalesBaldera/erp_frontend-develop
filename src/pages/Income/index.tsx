import React, { useState } from "react";
import { useDeleteIncome, useGetIncomeByModel } from "../../hooks/useIncome";
import { MachineryIncomeResponse } from "../../domain/machinery.interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import GroupRadioButton from "../../components/GroupRadioButton";
import ButtonDefault from "../../components/ButtonDefault";
import { styleTableItem, styleTableResponsive } from "../../style/StyleModal";
import { capitalizer, formatDayMonthYear } from "../../utils/capitalize";
import ConfirmModal from "../../components/ConfirmModal";
import ModalDetailGeneric from "../../components/ModalDetailGeneric";
import ModalIcomeEdit from "../../components/ModalIcomeEdit";

const dataCreate = {
  id: 0,
  transactionDate: "",
  hoursOperated: 0,
  hourlyRate: 0,
  totalIncome: 0,
  invoiceNumber: "",
  projectName: "",
  heavyMachineryId: 0,
};

const Income: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);

  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const [selectedValue, setSelectedValue] = useState<string>("oruga");
  const { mutateAsync: mutationDeleteId } = useDeleteIncome();
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const { data: searchedDocumentsData } = useGetIncomeByModel({
    model: selectedValue,
  });

  React.useEffect(() => {
    if (searchedDocumentsData) {
      setDocumentsData(searchedDocumentsData);
    }
  }, [searchedDocumentsData]);

  const handleRadioChange = (value: string) => {
    console.log(value);
    setSelectedValue(value);
  };

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const handleOpenEdit = (row: MachineryIncomeResponse) => {
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
      field: "projectName",
      headerName: "Nombre del proyecto",
      flex: 1,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "transactionDate",
      headerName: "Fecha de transacción",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => formatDayMonthYear(params.value),
    },
    {
      field: "hoursOperated",
      headerName: "Horas Operadas",
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
  const fieldsDetail = [
    {
      title: "Fecha de transacción",
      value: formatDayMonthYear(selectedRow.transactionDate),
    },
    { title: "Horas de funcionamiento", value: selectedRow.hoursOperated },
    { title: "Tarifa por hora", value: selectedRow.hourlyRate },
    { title: "Ingreso total", value: selectedRow.totalIncome },
    { title: "Número de factura", value: selectedRow.invoiceNumber },
    { title: "Nombre del proyecto", value: selectedRow.projectName },
    { title: "Código de la maquinaria", value: selectedRow.heavyMachineryId },
  ];
  return (
    <Box>
      <Typography variant="button">{"LISTA DE INGRESOS DE LAS MAQUINARIAS"}</Typography>
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
        <Grid item xs="auto" order={{ xs: 1, sm: 3 }}>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO INGRESO" />
        </Grid>
      </Grid>
      <Grid sx={styleTableResponsive}>
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

        <ModalIcomeEdit //boton de editar
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
          title="DETALLE DEL INGRESO - CÓDIGO"
        />
        <ConfirmModal //boton de eliminar
          onConfirm={openModalConfirm}
          onCancel={handleCloseConfirmModal}
          onConfirmAction={handleDelete}
          id={Number(valueDelete)}
        />
      </Grid>
      <ModalIcomeEdit ///crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </Box>
  );
};

export default Income;
