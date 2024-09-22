import { Box, Grid, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto mb-5">
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
          <DatePickerForm
            key="initial-day"
            dateValue={initialDay}
            labelValue="Inicio de búsqueda"
            handleDateChange={(date) => handleChange(date, "initial-day")}
            nameValue="initial-day"
          />
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
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
        </>
      </Box>
    </div>
  );
}

export default DayFilter;
