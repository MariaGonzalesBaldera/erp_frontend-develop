import React, { useEffect, useState, useCallback } from "react";
import { Box, Grid, MenuItem, Modal, TextField } from "@mui/material";
import ButtonDefault from "../ButtonDefault";
import { ModalFormProps } from "../../types/index";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";

const currencies = [
  { value: "gas", label: "gas" },
  { value: "Biodiésel", label: "Biodiésel" },
  { value: "Petroleo", label: "Petroleo" },
];

const ModalForm: React.FC<ModalFormProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    modelYear: "",
    acquisitionDate: "",
    netLoad: "",
    fuelType: "",
    createdAt: "",
  });

  useEffect(() => {
    if (openModal) {
      setFormData({
        brand: data?.brand || "",
        model: data?.model || "",
        modelYear: data?.modelYear || "",
        acquisitionDate: data?.acquisitionDate || "",
        netLoad: data?.netLoad || "",
        fuelType: data?.fuelType || "",
        createdAt: data?.createdAt || "",
      });
    }
  }, [openModal, data]);

  const handleChange = useCallback(
    (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormData]
  );
  const handleDateChange = useCallback(
    (date) => {
      setFormData((prevData) => ({
        ...prevData,
        maintenance_date: date,
      }));
    },
    [setFormData]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (mode === "create") {
        console.log("Creating new record:", formData);
        // Lógica de creación
      } else {
        console.log("Updating record:", formData);
        // Lógica de actualización
      }
      handleClose();
    },
    [formData, mode, handleClose]
  );
  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";
  const modalTitle =
    mode === "create" ? "NUEVA MAQUINARIA" : "ACTUALIZAR DATOS DE MAQUINARIA";

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalInspection}>
        <HeaderModal
          titleHeader={modalTitle}
          id={data?.id + "" || ""}
          handleClose={handleClose}
        />
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
                <DatePickerForm
                  dateValue={formData.acquisitionDate}
                  labelValue="Fecha de Adquisición"
                  handleDateChange={handleDateChange}
                  nameValue={"acquisitionDate"}
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
              {mode !== "create" && (
                <Grid item xs={12}>
                  <TextField
                    label="Creado el"
                    variant="outlined"
                    fullWidth
                    name="createdAt"
                    value={formData.createdAt}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
              )}
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <ButtonDefault title={buttonText} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalForm;
