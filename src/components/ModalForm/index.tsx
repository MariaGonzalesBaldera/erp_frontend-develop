import React, { useEffect, useState, useCallback } from "react";
import { Box, Grid, MenuItem, Modal, TextField } from "@mui/material";
import ButtonDefault from "../ButtonDefault";
import { ModalFormProps } from "../../types/index";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import {
  useCreateMachinery,
  useUpdateMachinery,
} from "../../hooks/useMaquinaria";
import { MachineryResponse } from "../../domain/machinery.interface";
<<<<<<< HEAD
import dayjs from "dayjs";
=======
import { formatDateForAPI } from "../../utils/capitalize";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

const fuelTypeItem = [
  { value: "gas", label: "Gas" },
  { value: "biodiesel", label: "Biodiésel" },
  { value: "petroleo", label: "Petróleo" },
];

const modelItem = [
  { value: "oruga", label: "Oruga" },
  { value: "retroexcavadora", label: "Retroexcavadora" },
  { value: "volquete", label: "Volquete" },
];

const ModalForm: React.FC<ModalFormProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createMachinery = useCreateMachinery();
<<<<<<< HEAD
=======
  const [loading, setLoading] = useState(false);
  const updateBeneficiaryMutation = useUpdateMachinery({
    id: data.id?.toString(),
  });
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    modelYear: "",
    acquisitionDate: "",
    netLoad: "",
    fuelType: "",
    createdAt: "",
  });
  const [errors, setErrors] = useState({
    brand: false,
    model: false,
    modelYear: false,
    acquisitionDate: false,
    netLoad: false,
    fuelType: false,
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

<<<<<<< HEAD
  const updateBeneficiaryMutation = useUpdateMachinery({
    id: data.id?.toString(),
  });

=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Actualizar los datos del formulario
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Eliminar el error si el campo tiene un valor válido
    if (value !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  }, []);
  const handleDateChange = useCallback((date) => {
    setFormData((prevData) => ({
      ...prevData,
      acquisitionDate: date,
    }));

    if (date !== null) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        acquisitionDate: false,
      }));
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Verifica campos vacíos
      const newErrors = {
        brand: formData.brand === "",
        model: formData.model === "",
        modelYear: formData.modelYear === "",
        acquisitionDate: formData.acquisitionDate === "",
        netLoad: formData.netLoad === "",
        fuelType: formData.fuelType === "",
      };

      setErrors(newErrors);

      // Verifica si hay errores
      const hasErrors = Object.values(newErrors).some((error) => error);
      if (hasErrors) {
        return; // No proceder si hay errores
      }
<<<<<<< HEAD
      let body;
      if (mode === "create") {
        body = {
          brand: (formData.brand),
          model: formData.model,
          modelYear: formData.modelYear,
          acquisitionDate: formatDateForAPI(formData.acquisitionDate),
          netLoad: formData.netLoad,
          fuelType: formData.fuelType,
        };
        console.log("Creating new record:", body);
        onCreateMachinery(body);
      } else {
        body = {
          brand: formData.brand,
          model: formData.model,
          modelYear: formData.modelYear,
          acquisitionDate: formatDateForAPI(formData.acquisitionDate),
          netLoad: formData.netLoad,
          fuelType: formData.fuelType
        };
        onUpdateMachinery(body);
      }
      handleClose();
    },
    [formData, mode, useCreateMachinery, handleClose]
  );
  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";
  const modalTitle =
    mode === "create" ? "NUEVA MAQUINARIA" : "ACTUALIZAR DATOS DE MAQUINARIA";

=======
      setLoading(true);
      try{
        let body;
        if (mode === "create") {
          body = {
            brand: formData.brand,
            model: formData.model,
            modelYear: formData.modelYear,
            acquisitionDate: formatDateForAPI(formData.acquisitionDate),
            netLoad: formData.netLoad,
            fuelType: formData.fuelType,
          };
          console.log("Creating new record:", body);
          onCreateMachinery(body);
        } else {
          body = {
            brand: formData.brand,
            model: formData.model,
            modelYear: formData.modelYear,
            acquisitionDate: formatDateForAPI(formData.acquisitionDate),
            netLoad: formData.netLoad,
            fuelType: formData.fuelType,
          };
          onUpdateMachinery(body);
        }
      }catch(e){
        console.log("error")
      }finally{
        setLoading(false); // Finalizar la carga
        handleClose();
      }



    },
    [formData, mode, useCreateMachinery, handleClose]
  );
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  const onCreateMachinery = async (data: MachineryResponse) => {
    try {
      const response = await createMachinery.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };

  const onUpdateMachinery = async (data: MachineryResponse) => {
    try {
      const response = await updateBeneficiaryMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
<<<<<<< HEAD
  const formatDateForAPI = (date) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "";
  };
=======
  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";
  const modalTitle =
    mode === "create" ? "NUEVA MAQUINARIA" : "ACTUALIZAR DATOS DE MAQUINARIA";

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
                  size="small"
                  variant="outlined"
                  fullWidth
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  error={errors.brand}
                  helperText={errors.brand ? "Este campo es requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  id="outlined-select-currency"
                  label="Modelo"
                  select
                  variant="outlined"
                  fullWidth
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  error={errors.model}
                  helperText={errors.model ? "Este campo es requerido" : ""}
                >
                  {modelItem.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  label="Año de Modelo"
                  variant="outlined"
                  fullWidth
                  name="modelYear"
                  type="number"
                  value={formData.modelYear}
                  onChange={handleChange}
                  error={errors.modelYear}
                  helperText={errors.modelYear ? "Este campo es requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerForm
                  dateValue={formData.acquisitionDate}
                  labelValue="Fecha de Adquisición"
                  handleDateChange={handleDateChange}
                  nameValue={"acquisitionDate"}
                  error={errors.acquisitionDate}
                  helperText={
                    errors.acquisitionDate ? "Este campo es requerido" : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  label="Carga Neta"
                  variant="outlined"
                  fullWidth
                  name="netLoad"
                  type="number"
                  value={formData.netLoad}
                  onChange={handleChange}
                  error={errors.netLoad}
                  helperText={errors.netLoad ? "Este campo es requerido" : ""}
                  InputProps={{
<<<<<<< HEAD
                    endAdornment: <span className="text-icon-primary">Toneladas</span>,
=======
                    endAdornment: (
                      <span className="text-icon-primary">Toneladas</span>
                    ),
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  id="outlined-select-currency"
                  label="Tipo de Combustible"
                  select
                  variant="outlined"
                  fullWidth
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  error={errors.fuelType}
                  helperText={errors.fuelType ? "Este campo es requerido" : ""}
                >
                  {fuelTypeItem.map((option) => (
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
