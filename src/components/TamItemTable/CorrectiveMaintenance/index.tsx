import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalMoreDetail from "../../ModalMoreDetail";
import { CorrectiveMaintananceItem } from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEditMaintenance from "../../ModalEditMaintenance";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";

const rows = [
  {
    id: 1,
    description: "Nueva descripcion",
    maintenance_date: "2024-08-01",
    amount_paid: "123",
    operator: "Pepito Gomez",
    project_name: "Proyecto de la playa",
    observations: "Routine check",
    driving_start: "08:00",
    driving_end: "12:00",
  },
  {
    id: 2,
    description: "Nueva des",
    maintenance_date: "2024-08-02",
    amount_paid: "200",
    operator: "Juanito Perez Juanito PerezJuanito Perez",
    project_name: "King's Landing",
    observations: "Es urgente",
    driving_start: "10:00",
    driving_end: "14:00",
  },
  {
    id: 3,
    description: "Lannister",
    maintenance_date: "2024-08-03",
    amount_paid: "1800",
    operator: "Juanito Perez",
    project_name: "Casa de las rocas",
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
    amount_paid: "2000",
    operator: "Juanito Perez",
    project_name: "Dragonstone",
    observations: "Operator training required",
    driving_start: "08:30",
    driving_end: "2:30",
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
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: CorrectiveMaintananceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

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
      headerName: "Acciones",
      flex: 0.5,
      minWidth: 150,
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <Tooltip title="Editar">
            <IconButton
              onClick={() => handleOpenEdit(params.row)}
              aria-label="Editar"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Detalle">
            <IconButton
              onClick={() => handleOpen(params.row)}
              aria-label="Ver detalles"
            >
              <ListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ELiminar">
            <IconButton
              onClick={() => handleOpenDelete()}
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
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          className="truncate..."
          hideFooter
          rows={rows}
          columns={columns}
        />
      </div>

      <ModalEditMaintenance //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
      />

      <ModalMoreDetail //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={1}
      />
    </>
  );
};

export default CorrectiveMaintenance;
