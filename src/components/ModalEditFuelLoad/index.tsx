import React, { useCallback, useEffect, useState } from "react";
import { FuelLoadProps } from "../../types";
import { Box, Grid, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import ButtonDefault from "../ButtonDefault";

interface ModalEditFuelLoadProps {
  openModal: boolean;
  handleClose: () => void;
  data: FuelLoadProps;
  mode: string;
}

const ModalEditFuelLoad: React.FC<ModalEditFuelLoadProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    numberGallons: 0,
    fuelingMileage: "",
    fuelingDate: "",
    amountPaid: 0,
    invoiceNumber: "",
    createdAt: "",
    updatedAt: "",
    heavyMachineryId: "",
  });
  useEffect(() => {
    if (openModal) {
      setFormData({
        id: data.id || "",
        numberGallons: data.numberGallons || 0,
        fuelingMileage: data.fuelingMileage || "",
        fuelingDate: data.fuelingDate || "",
        amountPaid: data.amountPaid || 0,
        invoiceNumber: data.invoiceNumber || "",
        createdAt: data.createdAt || "",
        updatedAt: data.updatedAt || "",
        heavyMachineryId: data.heavyMachineryId || "",
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
    mode === "create" ? "CREAR NUEVO REGISTRO" : "EDITAR REGISTRO";

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
          id={formData.id || "#"} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Número de Galones"
                  name="numberGallons"
                  value={formData.numberGallons}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Millaje de Abastecimiento"
                  name="fuelingMileage"
                  value={formData.fuelingMileage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerForm
                  dateValue={formData.fuelingDate}
                  labelValue="Fecha de Abastecimiento"
                  handleDateChange={handleDateChange}
                  nameValue="fuelingDate"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cantidad Pagada"
                  name="amountPaid"
                  value={formData.amountPaid}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Número de Factura"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="ID de la Maquinaria Pesada"
                  name="heavyMachineryId"
                  value={formData.heavyMachineryId}
                  onChange={handleChange}
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

export default ModalEditFuelLoad;
