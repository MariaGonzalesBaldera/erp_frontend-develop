import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
//MonthlyAccountingInformation

const rows = [
  {
    id: 1,
    year: 2023,
    month: 1,
    originDescription: "Pago de cliente",
    transactionType: "Crédito",
    amountPaid: 1500.75,
  },
  {
    id: 2,
    year: 2023,
    month: 2,
    originDescription: "Compra de suministros de oficina",
    transactionType: "Débito",
    amountPaid: 320.4,
  },
  {
    id: 3,
    year: 2023,
    month: 3,
    originDescription: "Suscripción de servicio",
    transactionType: "Débito",
    amountPaid: 79.99,
  },
  {
    id: 4,
    year: 2023,
    month: 4,
    originDescription: "Pago de factura de proyecto",
    transactionType: "Crédito",
    amountPaid: 2450.0,
  },
];
function MonthFilter() {
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
        <div className="col-span-1 md:col-span-1 border flex items-center justify-start p-2">
          <span className="text-1xl ">Total 1:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 border flex items-center justify-start p-2">
          <span className="text-1xl ">Total 2:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 border flex items-center justify-start p-2">
          <span className="text-1xl ">Total 3:&nbsp;</span>
          <span className="text-1xl font-semibold">00.000</span>
        </div>
        <div className="col-span-1 md:col-span-1 border flex items-center justify-start p-2">
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

export default MonthFilter;
