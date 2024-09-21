import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { FuelLoadProps } from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../ConfirmModal";
import ListIcon from "@mui/icons-material/List";
import { styleTableItem } from "../../../style/StyleModal";
import ModalEditFuelLoad from "../../ModalEditFuelLoad";
import ModalFuelLoadDetail from "../../ModalFuelLoadDetail";
import dayjs from "dayjs";
import {
  useDeleteFuelingUp,
  useGetFuelingUpByMachinery,
} from "../../../hooks/useFuelingUp";

interface FuelLoadPropsItem {
  idMachinery: number;
}
const FuelLoad: React.FC<FuelLoadPropsItem> = ({ idMachinery }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);
  const { mutateAsync: mutationDeleteId } = useDeleteFuelingUp();
  const [valueDelete, setValueDelete] = useState(0);
  const { data: machineryData } = useGetFuelingUpByMachinery({
    id: idMachinery,
  });
  console.log("DATA " + machineryData);
 
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseConfirmModal = () => {
    setOpenModalConfirm(false)};

  const handleOpenEdit = (row: FuelLoadProps) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };

  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpenConfirmModal = () => setOpenModalConfirm(true);

  const handleDelete = async () => {
    try {
      await mutationDeleteId(Number(valueDelete));
      console.log("Documento eliminado exitosamente");
    } catch (error) {
      console.log("Error al eliminar documento: ", error);
    }
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
      field: "numberGallons",
      headerName: "Número de galones",
      flex: 1,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingMileage",
      headerName: "Combustible kilometraje",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelingDate",
      headerName: "Fecha abastecimiento de combustible",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => dayjs(params.value).format("DD-MM-YYYY"),
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <Tooltip title="Editar">
            <IconButton
              color="success"
              onClick={() => handleOpenEdit(params.row)}
              aria-label="Editar"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Detalle">
            <IconButton
              color="warning"
              onClick={() => handleOpen(params.row)}

              aria-label="Ver detalles"
            >
              <ListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ELiminar">
            <IconButton
              color="error"
              onClick={()=>{
                setValueDelete(Number(params.id))
                handleOpenConfirmModal()
              }}              aria-label="ELiminar"
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
          sx={styleTableItem}
          className="truncate..."
          hideFooter
          rows={machineryData || []}
          columns={columns}
        />
      </div>

      <ModalEditFuelLoad //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalFuelLoadDetail //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openModalConfirm}
        onCancel={handleCloseConfirmModal}
        onConfirmAction={handleDelete}
        id={Number(valueDelete)}

      />
    </>
  );
};

export default FuelLoad;
