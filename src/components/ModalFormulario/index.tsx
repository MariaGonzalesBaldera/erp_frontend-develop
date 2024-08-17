import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import ButtonDefault from "../ButtonDefault";
import { MaquinariaData } from "../../types/index";

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "70%",
    md: "50%",
    lg: "40%",
  },
  maxWidth: "800px",
  height: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface ModalFormularioProps {
  openModal: boolean;
  handleClose: () => void;
  data: MaquinariaData;
  title: string;
}
const ModalFormulario: React.FC<ModalFormularioProps> = ({
  openModal,
  handleClose,
  data,
  title,
}) => {
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const [formData, setFormData] = useState({
    brand: data.brand || "",
    model: data.model || "",
    modelYear: data.modelYear || "",
    acquisitionDate: data.acquisitionDate || "",
    netLoad: data.netLoad || "",
    fuelType: data.fuelType || "",
    createdAt: data.createdAt || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const currencies = [
    {
      value: "gas",
      label: "gas",
    },
    {
      value: "Biodiésel",
      label: "Biodiésel",
    },
    {
      value: "Petroleo",
      label: "Petroleo",
    },
  ];

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
            {title}
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
                  label="Marca"
                  variant="outlined"
                  fullWidth
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Modelo"
                  variant="outlined"
                  fullWidth
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Año de Modelo"
                  variant="outlined"
                  fullWidth
                  name="modelYear"
                  type="number"
                  value={formData.modelYear}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fecha de Adquisición"
                  variant="outlined"
                  fullWidth
                  name="acquisitionDate"
                  type="date"
                  value={formData.acquisitionDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Carga Neta"
                  variant="outlined"
                  fullWidth
                  name="netLoad"
                  value={formData.netLoad}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  label="Tipo de Combustible"
                  select
                  variant="outlined"
                  fullWidth
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
                          
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <ButtonDefault
                  onClick={handleOpenUpdateModal}
                  title="GUARDAR"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalFormulario;
