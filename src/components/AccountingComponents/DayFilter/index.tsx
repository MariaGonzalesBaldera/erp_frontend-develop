import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useCallback } from "react";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import DatePickerForm from "../../DatePickerForm";

const rows = [
  {
    id: 1,
    year: 2023,
    month: 7,
    originDescription: "Compra de materiales",
    transactionType: "Gasto",
    amountPaid: 15000.5,
    invoiceNumber: "FAC-202307001",
    transactionDate: "2023-07-15",
    heavyMachinery: 2,
  },
  {
    id: 2,
    year: 2023,
    month: 8,
    originDescription: "Mantenimiento de equipo",
    transactionType: "Gasto",
    amountPaid: 22000.75,
    invoiceNumber: "FAC-202308002",
    transactionDate: "2023-08-10",
    heavyMachinery: 1,
  },
  {
    id: 3,
    year: 2023,
    month: 9,
    originDescription: "Alquiler de maquinaria",
    transactionType: "Gasto",
    amountPaid: 30000.0,
    invoiceNumber: "FAC-202309003",
    transactionDate: "2023-09-05",
    heavyMachinery: 3,
  },
  {
    id: 4,
    year: 2023,
    month: 10,
    originDescription: "Venta de chatarra",
    transactionType: "Ingreso",
    amountPaid: 5000.0,
    invoiceNumber: "FAC-202310004",
    transactionDate: "2023-10-20",
    heavyMachinery: 0,
  },
];
function DayFilter() {
  const handleChange = useCallback((e) => {}, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "originDescription",
      headerName: "Origen Descripción",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "transactionType",
      headerName: "Tipo de transacción",
      flex: 1,
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amountPaid",
      headerName: "Cantidad Pagada",
      flex: 1,
      minWidth: 50,
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
              //   onClick={() => handleOpenEdit(params.row)}
              aria-label="Editar"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Detalle">
            <IconButton
              color="warning"
              //   onClick={() => handleOpen(params.row)}
              aria-label="Ver detalles"
            >
              <ListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ELiminar">
            <IconButton
              color="error"
              //   onClick={() => handleOpenDelete()}
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto mb-5">
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
          <DatePickerForm
            key={"initial-day"}
            dateValue={""}
            labelValue="Inicio de busqueda"
            handleDateChange={handleChange}
            nameValue="initial-day"
          />
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
        <DatePickerForm
            key={"end-day"}
            dateValue={""}
            labelValue="Fin de busqueda"
            handleDateChange={handleChange}
            nameValue="end-day"
          />
        </div>
      </div>

      <div className="grid border grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
        <div className="col-span-1 md:col-span-1 flex items-center justify-start p-2">
          <span className="text-1xl ">Total 1:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start p-2">
          <span className="text-1xl ">Total 2:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start p-2">
          <span className="text-1xl ">Total 3:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start p-2">
          <span className="text-1xl ">Total 4:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
      </div>
      <Box className="mt-4 mb-4">
        <Typography variant="button">{"DETALLE"}</Typography>
        <>
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

            {/* <ModalEditDocument //boton de editar
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
        /> */}
          </Grid>
          {/* <ModalEditDocument ///crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      /> */}
        </>
      </Box>
    </div>
  );
}

export default DayFilter;
