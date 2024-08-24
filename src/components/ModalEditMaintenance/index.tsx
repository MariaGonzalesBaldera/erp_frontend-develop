import React, { useCallback, useEffect, useState } from "react";
import { ModalEditMaintenanceProps } from "../../types";
import { Box, Grid, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import TimePickerForm from "../TimePickerForm";
import DatePickerForm from "../DatePickerForm";

const ModalEditMaintenance: React.FC<ModalEditMaintenanceProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [formData, setFormData] = useState({
    description: "",
    maintenance_date: "",
    amount_paid: "",
    operator: "",
    project_name: "",
    observations: "",
    driving_start: "",
    driving_end: "",
  });

  useEffect(() => {
    if (openModal) {
      setFormData({
        description: data.description || "",
        maintenance_date: data.maintenance_date || "",
        amount_paid: data.amount_paid || "",
        operator: data.operator || "",
        project_name: data.project_name || "",
        observations: data.observations || "",
        driving_start: data.driving_start || "",
        driving_end: data.driving_end || "",
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
        console.log("Creating record with data:", formData);
        alert("Record created successfully!");
      } else {
        console.log("Updating record with data:", formData);
        alert("Record updated successfully!");
      }
      handleClose(); // Close the modal after operation
    },
    [formData, mode, handleClose]
  );

  const modalTitle =
    mode === "create" ? "CREAR NUEVO MANTENIMIENTO" : "EDITAR MANTENIMIENTO";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";

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
          id={"#"} //aqui va el id
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerForm
                  dateValue={formData.maintenance_date}
                  labelValue="Fecha de Mantenimiento"
                  handleDateChange={handleDateChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cantidad Pagada"
                  name="amount_paid"
                  value={formData.amount_paid}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Operador"
                  name="operator"
                  value={formData.operator}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre del Proyecto"
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  fullWidth
                  label="Observaciones"
                  name="observations"
                  value={formData.observations}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerForm
                  timeValue={formData.driving_start}
                  nameValue="driving_start"
                  label="Inicio de conduccion"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerForm
                  timeValue={formData.driving_end}
                  nameValue="driving_end"
                  label="Fin de conduccion"
                />
              </Grid>

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

export default ModalEditMaintenance;
