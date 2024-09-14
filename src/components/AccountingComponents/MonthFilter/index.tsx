import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  styleTableItem,
  styleTableResponsive,
} from "../../../style/StyleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
//MonthlyAccountingInformation
import { useGetAccountingList } from "../../../hooks/userAcccounting";
import { AccountingResponse } from "../../../domain/machinery.interface";
import { SearchSharp } from "@mui/icons-material";
import themeNew from "../../../utils/theme";

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
  ///obtener el mes actual
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

  // Obtener los datos iniciales
  const { data: listData } = useGetAccountingList({ id: searchDate });

  useEffect(() => {
    if (listData) {
      const dataWithIds = listData.map((item, index) => ({
        ...item,
        id: index + 1, // Agregar id numérico único
      }));
      setRowsWithIds(dataWithIds);
    }
  }, [listData]);
  // Manejar cambios en los TextField
  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  };

  // Manejar cambios en el TextField de año
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(event.target.value);
  };

  // Manejar búsqueda al hacer clic en el botón
  const handleSearch = () => {
    const newDate = `${selectedYear}-${selectedMonth}-01`; // Combinar año-mes-01
    setSearchDate(newDate); // Actualizar la fecha de búsqueda
    console.log("Nueva fecha para la búsqueda: ", newDate);
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
        <div className="col-span- md:col-span-2 flex items-center justify-start p-2">
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
                rows={rowsWithIds || []}
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
