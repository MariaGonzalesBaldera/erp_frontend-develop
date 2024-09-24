import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useGetAccountingList,
  useGetAccountingListTable,
} from "../../../hooks/userAcccounting";
import { AccountingResponseTable } from "../../../domain/machinery.interface";
import themeNew from "../../../utils/theme";
import { formatDayMonthYear, getMonthName } from "../../../utils/capitalize";
import { SearchSharp } from "@mui/icons-material";

const MonthItem = [
  { value: "01", label: "Enero" },
  { value: "02", label: "Febrero" },
  { value: "03", label: "Marzo" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Mayo" },
  { value: "06", label: "Junio" },
  { value: "07", label: "Julio" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];
function MonthFilter() {
  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [searchDate, setSearchDate] = useState(
    `${currentYear}-${currentMonth}-01`
  );

  const [rowsWithIds, setRowsWithIds] = useState<AccountingResponseTable[]>([]);

  //total
  const { data: listData, refetch } = useGetAccountingList({
    searchMonth: searchDate,
  });
  //detalle
  const { data: listDataTable } = useGetAccountingListTable({
    searchMonth: searchDate,
  });

  useEffect(() => {
    if (listDataTable) {
      const dataWithIds = listDataTable.map((item, index) => ({
        ...item,
        id: index + 1, // Agregar ID numérico único
      }));
      setRowsWithIds(dataWithIds);
    }
  }, [listDataTable]);

  const mantCorrectivo =
    listData?.find((item) => item.originDescription === "MANT. CORRECTIVO")
      ?.amountPaid || 0;

  const mantPreventivo =
    listData?.find((item) => item.originDescription === "MANT. PREVENTIVO")
      ?.amountPaid || 0;

  const cargaCombustible =
    listData?.find((item) => item.originDescription === "CARGA COMBUSTIBLE")
      ?.amountPaid || 0;

  const ingresoMaquinaria =
    listData?.find((item) => item.originDescription === "INGRESO MAQUINARIA")
      ?.amountPaid || 0;

  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  };

  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleSearch = () => {
    const newDate = `${selectedYear}-${selectedMonth}-01`;
    setSearchDate(newDate);
    refetch(); // Refrescar los datos de la búsqueda
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
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
        <div className="col-span- md:col-span-2 flex items-center justify-start">
          <TextField
            size="small"
            id="outlined-select-currency"
            label="Mes"
            select
            variant="outlined"
            fullWidth
            name="Mes"
            value={selectedMonth}
            onChange={handleChangeMonth}
          >
            {MonthItem.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div className="col-span- md:col-span-2 flex items-center justify-start p-2">
            <TextField
              size="small"
              fullWidth
              type="number"
              label="Año"
              name="Anio"
              value={selectedYear}
              onChange={handleChangeYear}
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
        </div>
      </div>
      <Box className=" pt-2 ">
        <Typography variant="button">MONTOS TOTALES POR MES</Typography>
      </Box>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-1">
        <div className="col-span-1 border bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
          <span className="block text-base font-medium">
            Mantenimiento Correctivo:
          </span>
          <span className="block text-xl font-bold text-gray-700">
            {mantCorrectivo !== undefined
              ? mantCorrectivo.toFixed(2)
              : "loading..."}
          </span>
        </div>
        <div className="col-span-1 border bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
          <span className="block text-base font-medium">
            Mantenimiento Preventivo:
          </span>
          <span className="block text-xl font-bold text-gray-700">
            {mantPreventivo !== undefined
              ? mantPreventivo.toFixed(2)
              : "loading..."}
          </span>
        </div>
        <div className="col-span-1 border bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
          <span className="block text-base font-medium">
            Carga Combustible:
          </span>
          <span className="block text-xl font-bold text-gray-700">
            {cargaCombustible !== undefined
              ? cargaCombustible.toFixed(2)
              : "loading..."}
          </span>
        </div>
        <div className="col-span-1 border bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
          <span className="block text-base font-medium">
            Ingreso Maquinaria:
          </span>
          <span className="block text-xl font-bold text-gray-700">
            {ingresoMaquinaria !== undefined
              ? ingresoMaquinaria.toFixed(2)
              : "loading..."}
          </span>
        </div>
      </div>

      <Box className="mt-4 mb-4">
        <Typography variant="button">{"DETALLE"}</Typography>
        <>
          <Grid sx={styleTableResponsive}>
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
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  sx={styleTableItem}
                  className="truncate..."
                  hideFooter
                  rows={rowsWithIds || []}
                  columns={columns}
                />
              </div>
            )}
          </Grid>
        </>
      </Box>
    </div>
  );
}

export default MonthFilter;
