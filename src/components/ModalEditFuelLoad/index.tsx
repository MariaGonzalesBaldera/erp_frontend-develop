import React, { useCallback, useEffect, useState } from "react";
import { FuelLoadProps } from "../../types";
import { Box, Grid, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import ButtonDefault from "../ButtonDefault";
import {
  useCreateFuelingUp,
  useUpdateFuelingUp,
} from "../../hooks/useFuelingUp";
import { FuelingUpResponse } from "../../domain/machinery.interface";

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
  const createFuelingUp = useCreateFuelingUp();
  const updateMutation = useUpdateFuelingUp({
    id: Number(data.id),
  });
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
  const [errors, setErrors] = useState({
    numberGallons: false,
    fuelingMileage: false,
    fuelingDate: false,
    amountPaid: false,
    invoiceNumber: false,
    createdAt: false,
    updatedAt: false,
    heavyMachineryId: false,
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
  const handleDateChange = useCallback((date) => {
    setFormData((prevData) => ({
      ...prevData,
      fuelingDate: date,
    }));

    if (date !== null) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fuelingDate: false,
      }));
    }
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newErrors = {
        numberGallons: formData.numberGallons === 0,
        fuelingMileage: formData.fuelingMileage === "",
        fuelingDate: formData.fuelingDate === "",
        amountPaid: formData.amountPaid === 0,
        invoiceNumber: formData.invoiceNumber === "",
        createdAt: formData.createdAt === "",
        updatedAt: formData.updatedAt === "",
        heavyMachineryId: formData.heavyMachineryId === "",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => {error});
      if (hasErrors) {
        return; // No proceder si hay errores
      }

      let body = {
        numberGallons: formData.numberGallons,
        fuelingMileage: formData.fuelingMileage,
        fuelingDate: formData.fuelingDate,
        amountPaid: formData.amountPaid,
        invoiceNumber: formData.invoiceNumber,
        createdAt: formData.createdAt,
        updatedAt: formData.updatedAt,
        heavyMachineryId: formData.heavyMachineryId,
      };
      console.log("heavyMachineryId " + body);
      if (mode === "create") {
        onCreateFuelingUp(body);
      } else {
        onUpdateFuelingUp(body); // Solo se envían los datos del usuario al actualizar
      }
      handleClose(); // Close the modal after operation
    },
    [formData, mode, useCreateFuelingUp, useUpdateFuelingUp, handleClose]
  );

  const onCreateFuelingUp = async (data: FuelingUpResponse) => {
    try {
      const response = await createFuelingUp.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateFuelingUp = async (data: FuelingUpResponse) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };

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
          id={formData.id || ""} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Número de Galones"
                  name="numberGallons"
                  type="number"
                  value={formData.numberGallons}
                  onChange={handleChange}
                  error={errors.numberGallons}
                  helperText={errors.numberGallons ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Millaje de Abastecimiento"
                  name="fuelingMileage"
                  value={formData.fuelingMileage}
                  onChange={handleChange}
                  error={errors.fuelingMileage}
                  helperText={errors.fuelingMileage ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerForm
                  dateValue={formData.fuelingDate}
                  labelValue="Fecha de Abastecimiento"
                  handleDateChange={handleDateChange}
                  nameValue="fuelingDate"
                  error={errors.fuelingDate}
                  helperText={errors.fuelingDate ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Cantidad Pagada"
                  name="amountPaid"
                  type="number"
                  value={formData.amountPaid}
                  onChange={handleChange}
                  error={errors.amountPaid}
                  helperText={errors.amountPaid ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Número de Factura"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  error={errors.invoiceNumber}
                  helperText={errors.invoiceNumber ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="ID de la Maquinaria Pesada"
                  name="heavyMachineryId"
                  value={formData.heavyMachineryId}
                  onChange={handleChange}
                  error={errors.heavyMachineryId}
                  helperText={errors.heavyMachineryId ? "Campo requerido" : ""}
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
