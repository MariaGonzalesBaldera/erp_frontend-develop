import React, { useCallback, useEffect, useState } from "react";
import { FuelLoadProps } from "../../types";
import { Box, CircularProgress, Grid, MenuItem, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import ButtonDefault from "../ButtonDefault";
import { useGetMachineryList } from "../../hooks/useMaquinaria";
import {
  useCreateFuelingUp,
  useUpdateFuelingUp,
} from "../../hooks/useFuelingUp";
import {
  FuelingUpResponse,
  MachineryResponse,
} from "../../domain/machinery.interface";
import { capitalizer } from "../../utils/capitalize";

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
    id: data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    numberGallons: 0,
    fuelingMileage: "",
    fuelingDate: "",
    amountPaid: 0,
    invoiceNumber: "",
    heavyMachineryId: 0,
  });
  const [errors, setErrors] = useState({
    numberGallons: false,
    fuelingMileage: false,
    fuelingDate: false,
    amountPaid: false,
    invoiceNumber: false,
    heavyMachineryId: false,
  });

  useEffect(() => {
    if (openModal && data) {
      setFormData({
        numberGallons: data.numberGallons || 0,
        fuelingMileage: data.fuelingMileage || "",
        fuelingDate: data.fuelingDate || "",
        amountPaid: data.amountPaid || 0,
        invoiceNumber: data.invoiceNumber || "",
        heavyMachineryId: data.heavyMachineryId || 0,
      });
    }
  }, [openModal, data]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

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
    async (e) => {
      e.preventDefault();

      const newErrors = {
        numberGallons: formData.numberGallons === 0,
        fuelingMileage: formData.fuelingMileage === "",
        fuelingDate: formData.fuelingDate === "",
        amountPaid: formData.amountPaid === 0,
        invoiceNumber: formData.invoiceNumber === "",
        heavyMachineryId: mode === "create" && !selectedMachinery,
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error === true);
      if (hasErrors) {
        return; // Si hay errores, no proceder
      }

      setLoading(true); // Iniciar la carga
      try {
        let body;
        if (mode === "create") {
          body = {
            ...formData,
            heavyMachineryId: selectedMachinery, // Usa el valor actualizado de selectedMachinery
          };
          await onCreateFuelingUp(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdateFuelingUp(body);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        handleClose();
      }
    },
    [formData, mode, selectedMachinery,useCreateFuelingUp, useUpdateFuelingUp, handleClose]  );

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

  //recuperacion de maquinarias
  const { data: machineryData, isLoading, error } = useGetMachineryList(); // Llamar a la API
  const [machineryItems, setMachineryItems] = useState<
    { value: number; label: string }[]
>([]);

  // Actualizar el estado cuando los datos de la API están disponibles
  useEffect(() => {
    if (machineryData && !isLoading && !error) {
      const formattedItems = (machineryData || [])
        .filter(
          (machinery): machinery is MachineryResponse =>
            machinery.id !== undefined
        ) // Filtrar elementos con id definido
        .map((machinery) => ({
          value: machinery.id!,
          label: `${machinery.id} - ${capitalizer(
            machinery.model
          )} - ${capitalizer(machinery.brand)}`,
        }));
      setMachineryItems(formattedItems);
    }
  }, [machineryData, isLoading, error]); 
  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedMachinery(Number(event.target.value));
    errors.heavyMachineryId = false;
  };
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
          id={""} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box
           component="form"
            onSubmit={handleSubmit}
             sx={{ mt: 2 }}>
            {loading ?
             <Grid item xs={12} style={{ textAlign: "center" }}>
             <CircularProgress /> {/* Indicador de carga */}
           </Grid>
            :
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
          {mode == "create" ? (
            <Grid item xs={12} sm={6}>
              <div>
                {isLoading ? (
                  <p>Cargando maquinaria...</p>
                ) : error ? (
                  <p>Error al cargar la maquinaria</p>
                ) : (
                  <TextField
                    select
                    size="small"
                    label="Seleccione Maquinaria"
                    value={selectedMachinery}
                    onChange={handleChangeMachinery}
                    name="heavyMachineryId"
                    fullWidth
                    error={errors.heavyMachineryId}
                    helperText={
                      errors.heavyMachineryId ? "Campo requerido" : ""
                    }
                  >
                    {machineryItems.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </div>
            </Grid>
          ) : (
            ""
          )}
          <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
            <ButtonDefault title={buttonText} />
          </Grid>
        </Grid>  
          }
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditFuelLoad;
