import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { styleTableItem } from "../../../style/StyleModal";
import ModalEditMaintenance from "../../ModalEditMaintenance";
import ModalMoreDetail from "../../ModalMoreDetail";
import ConfirmModal from "../../ConfirmModal";
import { Grid, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import { PreventMaintenanceItem } from "../../../types";
import { useGetPreventiveByModel, useGetPreventiveMaintenanceList } from "../../../hooks/usePreventiveMaintenance";
import ButtonDefault from "../../ButtonDefault";
import SearchInput from "../../SearchInput";
import GroupRadioButton from "../../GroupRadioButton";
import { capitalizer } from "../../../utils/capitalize";
import { useGetDocumentByModel } from "../../../hooks/useDocuments";

const dataCreate = {
  id: "",
  motorOil: false,
  oilFilters: false,
  fuelFilters: false,
  airFilters: false,
  transmissionOil: false,
  periodType: "",
  maintenancePeriod: "",
  maintenanceDate: "",
  nextMaintenancePeriod: "",
  amountPaid: "",
  invoiceNumber: "",
  observations: "",
  heavyMachineryId: "",
};

const PreventMaintenancePage: React.FC = ({}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(0);

  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);
  const [selectedValue, setSelectedValue] = useState<string>("oruga");
  const [preventData, setDocumentsData] = useState<any[]>([]);
  const { data: initialpreventData } = useGetPreventiveMaintenanceList();
  const { data: searchedDocumentsData } = useGetPreventiveByModel({
    model: selectedValue,
  });
  // Cargar datos iniciales cuando el componente carga
  React.useEffect(() => {
    if (initialpreventData) {
      setDocumentsData(initialpreventData);
    }
  }, [initialpreventData]);

  React.useEffect(() => {
    if (searchedDocumentsData) {
      setDocumentsData(searchedDocumentsData);
    }
  }, [searchedDocumentsData]);
  const handleRadioChange = (value: string) => {
    console.log(value);
    setSelectedValue(value);
  };


  const handleOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseConfirmModal = () => setOpenDelete(false);

  const handleOpenEdit = (row: PreventMaintenanceItem) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleClose = () => setOpenDetail(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "periodType",
      headerName: "Tipo de período",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "maintenancePeriod",
      headerName: "Período de mantenimiento",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amountPaid",
      headerName: "Importe pagado",
      flex: 1,
      minWidth: 150,

      align: "center",
      headerAlign: "center",
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
      <Grid
        container
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={1}
        className="p-2 border border-gray-400 bg-white mb-2"
      >
        <Grid
          container
          xs="auto"
          gap={2}
          alignItems={"center"}
          order={{ xs: 2, sm: 1 }}
        >
          <GroupRadioButton
            showTitle={false}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs="auto" order={{ xs: 1, sm: 3 }}>
          <ButtonDefault onClick={handleOpenNewModal} title="NUEVO DOCUMENTO" />
        </Grid>
      </Grid>

      <div style={{ height: 400, width: "100%" }}>
        {preventData.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              alignContent: "center",
              border: "1px gray solid",
              height: "8rem",
            }}
          >
            No se encontraron documentos de {capitalizer(selectedValue)}
          </div>
        ) : (
          <DataGrid
            sx={styleTableItem}
            className="truncate..."
            hideFooter
            rows={preventData}
            columns={columns}
          />
        )}
      </div>

      <ModalEditMaintenance //boton de editar
        openModal={openEdit}
        handleClose={handleCloseEdit}
        data={selectedRow}
        mode="update"
      />

      <ModalMoreDetail //boton de detalle
        openModal={openDetail}
        handleClose={handleClose}
        data={selectedRow}
      />

      <ConfirmModal //boton de eliminar
        onConfirm={openDelete}
        onCancel={handleCloseConfirmModal}
        id={selectedRow.id}
      />
      <ModalEditMaintenance //boton de crear
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataCreate}
        mode="create"
      />
    </>
  );
};

export default PreventMaintenancePage;
