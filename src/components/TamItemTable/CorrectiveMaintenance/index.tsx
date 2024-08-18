import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalMoreDetail from "../../ModalMoreDetail";

const rows = [
  {
    id: 1,
    description: "Snow",
    maintenance_date: "2024-08-01",
    amount_paid: "2300",
    operator: "Juanito Perez",
    project_name: "North Wall Project",
    observations: "Routine check",
    driving_start: "08:00",
    driving_end: "12:00",
  },
  {
    id: 2,
    description: "Lannister",
    maintenance_date: "2024-08-02",
    amount_paid: "1500",
    operator: "Juanito Perez Juanito PerezJuanito Perez",
    project_name: "King's Landing",
    observations: "Emergency repair",
    driving_start: "10:00",
    driving_end: "14:00",
  },
  {
    id: 3,
    description: "Lannister",
    maintenance_date: "2024-08-03",
    amount_paid: "1800",
    operator: "Juanito Perez",
    project_name: "Casterly Rock",
    observations: "Standard service",
    driving_start: "09:00",
    driving_end: "13:00",
  },
  {
    id: 4,
    description: "Stark",
    maintenance_date: "2024-08-04",
    amount_paid: "2000",
    operator: "Juanito Perez",
    project_name: "Winterfell",
    observations: "Oil change",
    driving_start: "07:30",
    driving_end: "11:30",
  },
  {
    id: 5,
    description: "Targaryen",
    maintenance_date: "2024-08-05",
    amount_paid: "null",
    operator: "Juanito Perez",
    project_name: "Dragonstone",
    observations: "Operator training required",
    driving_start: null,
    driving_end: null,
  },
  {
    id: 6,
    description: "Melisandre",
    maintenance_date: "2024-08-06",
    amount_paid: "2100",
    operator: "Juanito Perez",
    project_name: "Asshai",
    observations: "Inspection",
    driving_start: "08:30",
    driving_end: "12:30",
  },
];

const CorrectiveMaintenance: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 100 },
    { field: "operator", headerName: "Operador", flex: 1, minWidth: 150 },
    { field: "description", headerName: "Descripción", flex: 2, minWidth: 120 },
    {
      field: "project_name",
      headerName: "Nombre del proyecto",
      flex: 2,
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Más Detalle",
      flex: 0.5, 
      minWidth: 100,
      renderCell: (params) => (
        <Tooltip title="Detalle">
          <IconButton
            onClick={() => handleOpen(params.row)}
            aria-label="Ver detalles" >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
        className="truncate..."
        hideFooter 
        rows={rows} 
        columns={columns}  />
      </div>

      <ModalMoreDetail
        openModal={open}
        handleClose={handleClose}
        data={selectedRow}
        
      />
    </>
  );
};

export default CorrectiveMaintenance;
