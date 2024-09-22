import {
  Box,
  Grid,
<<<<<<< HEAD
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
=======
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
=======
import { useGetAccountingList } from "../../../hooks/userAcccounting";
import { AccountingResponse } from "../../../domain/machinery.interface";
import themeNew from "../../../utils/theme";
import { getMonthName } from "../../../utils/capitalize";
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
  // Obtener el mes y año actual
  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  // Estados para el mes y el año seleccionados
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [searchDate, setSearchDate] = useState(
    `${currentYear}-${currentMonth}-01`
  );

  // Estado para los datos con 'id'
  const [rowsWithIds, setRowsWithIds] = useState<AccountingResponse[]>([]);

  // Obtener los datos iniciales con el hook personalizado
  const { data: listData, refetch } = useGetAccountingList({
    searchMonth: searchDate,
  });

  // Efecto para actualizar los datos con ID único
  useEffect(() => {
    if (listData) {
      const dataWithIds = listData.map((item, index) => ({
        ...item,
        id: index + 1, // Agregar ID numérico único
      }));
      setRowsWithIds(dataWithIds);
    }
  }, [listData]);

  // Manejar cambios en el TextField del mes
  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  };

  // Manejar cambios en el TextField del año
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(event.target.value);
  };

  // Manejar la búsqueda al hacer clic en el botón
  const handleSearch = () => {
    const newDate = `${selectedYear}-${selectedMonth}-01`; // Formato YYYY-MM-01
    setSearchDate(newDate); // Actualizar la fecha de búsqueda
    refetch(); // Refrescar los datos de la búsqueda
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
<<<<<<< HEAD
=======
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
<<<<<<< HEAD
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
        </>
      </Box>
    </div>
  );
}

export default MonthFilter;
