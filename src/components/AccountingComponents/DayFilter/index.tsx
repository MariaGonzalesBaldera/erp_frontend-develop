<<<<<<< HEAD
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useCallback } from "react";
=======
import { Box, Grid, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
<<<<<<< HEAD
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

=======
import DatePickerForm from "../../DatePickerForm";
import { SearchSharp } from "@mui/icons-material";
import themeNew from "../../../utils/theme";
import dayjs from "dayjs";
import { useGetAccountingRangeList } from "../../../hooks/userAcccounting";
import { AccountingResponse } from "../../../domain/machinery.interface";
import { getMonthName } from "../../../utils/capitalize";

function DayFilter() {
  // Establecer las fechas iniciales (hace una semana y hoy)
  const [initialDay, setInitialDay] = useState(
    dayjs().subtract(7, "day").format("YYYY-MM-DD")
  );
  const [endDay, setEndDay] = useState(dayjs().format("YYYY-MM-DD"));
  const [searchParams, setSearchParams] = useState({
    searchDateStart: initialDay,
    searchDateEnd: endDay,
  });
  const [rowsWithIds, setRowsWithIds] = useState<AccountingResponse[]>([]);
 
  // Hook para obtener los datos
  const { data: accountingData, refetch } = useGetAccountingRangeList({
    searchDateStart: searchParams.searchDateStart,
    searchDateEnd: searchParams.searchDateEnd,
  });

  useEffect(() => {
    if (accountingData) {
      const dataWithIds = accountingData.map((item, index) => ({
        ...item,
        id: index + 1, // Agregar id numérico único
      }));
      setRowsWithIds(dataWithIds);
    }
  }, [accountingData]);

  // Manejar el cambio de fecha
  const handleChange = (date: any, nameValue: string) => {
    if (nameValue === "initial-day") {
      setInitialDay(dayjs(date).format("YYYY-MM-DD"));
    } else if (nameValue === "end-day") {
      setEndDay(dayjs(date).format("YYYY-MM-DD"));
    }
  };

  // Manejar la búsqueda cuando se haga clic en el ícono
  const handleSearch = () => {
    // Actualizar los parámetros de búsqueda
    setSearchParams({
      searchDateStart: initialDay,
      searchDateEnd: endDay,
    });
    refetch();
  };
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
<<<<<<< HEAD
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
=======
      field: "Fecha",
      headerName: "Mes y año",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <span>
          {getMonthName(params.row.month || "")} - {params.row.year}
        </span>
      ),
      align: "center",
      headerAlign: "center",
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto mb-5">
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
          <DatePickerForm
<<<<<<< HEAD
            key={"initial-day"}
            dateValue={""}
            labelValue="Inicio de busqueda"
            handleDateChange={handleChange}
=======
            key="initial-day"
            dateValue={initialDay}
            labelValue="Inicio de búsqueda"
            handleDateChange={(date) => handleChange(date, "initial-day")}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
            nameValue="initial-day"
          />
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
<<<<<<< HEAD
        <DatePickerForm
            key={"end-day"}
            dateValue={""}
            labelValue="Fin de busqueda"
            handleDateChange={handleChange}
            nameValue="end-day"
          />
        </div>
=======
          <DatePickerForm
            key="end-day"
            dateValue={endDay}
            labelValue="Fin de búsqueda"
            handleDateChange={(date) => handleChange(date, "end-day")}
            nameValue="end-day"
          />
        </div>
        <SearchSharp
          onClick={handleSearch}
          sx={{
            border: `1px ${themeNew.palette.primary.main} solid`,
            width: 45,
            height: 40,
            padding: 0.8,
            cursor: "pointer",
            borderRadius: 1,
            marginLeft: 1, // Añade un margen a la izquierda del ícono
            "&:hover": {
              color: "#e2e0ff",
              backgroundColor: themeNew.palette.primary.main,
            },
          }}
        />
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
<<<<<<< HEAD
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
=======
              {rowsWithIds.length === 0 ? (
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
                  rows={rowsWithIds}
                  columns={columns}
                />
              )}
            </div>
          </Grid>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
        </>
      </Box>
    </div>
  );
}

export default DayFilter;
