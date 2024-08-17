import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "description", headerName: "Descripción", width: 120 },
  { field: "maintenance_date", headerName: "Fecha Mant.", width: 110 },
  { field: "amount_paid", headerName: "Cantidad pagada", width: 130 },
  { field: "operator", headerName: "Operador", width: 90 },
  { field: "project_name", headerName: "Nombre del proyecto", width: 150 },
  { field: "observations", headerName: "Observaciones", width: 130 },
  { field: "driving_start", headerName: "Inicio de conducción", width: 150 },
  { field: "driving_end", headerName: "Fin de conducción", width: 130 },
];
const rows = [
  {
    id: 1,
    description: "Snow",
    maintenance_date: "2024-08-01",
    amount_paid: "2300",
    operator: 35,
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
    operator: 42,
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
    operator: 45,
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
    operator: 16,
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
    operator: null,
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
    operator: 150,
    project_name: "Asshai",
    observations: "Inspection",
    driving_start: "08:30",
    driving_end: "12:30",
  },
];

const PreventMaintenance: React.FC = () => {
  return (
    <div style={{ height: 'auto', width: '100%', maxHeight: '400px', overflowX: 'auto' }}>
        <DataGrid hideFooter rows={rows} columns={columns} />
    </div>
  );
};

export default PreventMaintenance;
