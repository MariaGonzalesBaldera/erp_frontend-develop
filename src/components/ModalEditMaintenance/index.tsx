import React, { useEffect, useState } from "react";
import { PreventMaintenanceItem } from "../../types";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styleModal } from "../../style/StyleModal";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import ButtonDefault from "../ButtonDefault";

interface ModalEditMaintenanceProps {
  openModal: boolean;
  handleClose: () => void;
  data: PreventMaintenanceItem;
}

const ModalEditMaintenance: React.FC<ModalEditMaintenanceProps> = ({
  openModal,
  handleClose,
  data,
}) => {
  const [formData, setFormData] = useState({
    description: data.description || "",
    maintenance_date: data.maintenance_date || "",
    amount_paid: data.amount_paid || "",
    operator: data.operator || "",
    project_name: data.project_name || "",
    observations: data.observations || "",
    driving_start: data.driving_start || "",
    driving_end: data.driving_end || "",
  });
  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la actualización de los datos
  };
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        <Grid
          container
          className="pl-5"
          sx={{
            width: "100%",
            textAlign: "end",
            height: "2.5rem",
            backgroundColor: themeNew.palette.primary.main,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ color: "white" }}
            id="modal-modal-title"
            variant="button"
            component="h2"
          >
            {"Editar mantenimiento"}
          </Typography>
          <IconButton sx={{ color: "white" }} onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Fecha de Mantenimiento"
                  name="maintenance_date"
                  value={formData.maintenance_date}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cantidad Pagada"
                  name="amount_paid"
                  value={formData.amount_paid}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Operador"
                  name="operator"
                  value={formData.operator}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre del Proyecto"
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type="text"
                  fullWidth
                  label="Observaciones"
                  name="observations"
                  value={formData.observations}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  fullWidth
                  label="Inicio de Conducción"
                  name="driving_start"
                  value={formData.driving_start}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  fullWidth
                  label="Fin de Conducción"
                  name="driving_end"
                  value={formData.driving_end}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <ButtonDefault
                  onClick={handleOpenUpdateModal}
                  title="ACTUALIZAR"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditMaintenance;
