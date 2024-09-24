import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import ButtonDefault from "../ButtonDefault";
import { PreventMaintenanceItem } from "../../types";
import { capitalizer } from "../../utils/capitalize";
import { MachineryResponse } from "../../domain/machinery.interface";
import { useGetMachineryList } from "../../hooks/useMaquinaria";
import {
  useCreatePreventiveMaintenance,
  useUpdatePreventiveMaintenance,
} from "../../hooks/usePreventiveMaintenance";

interface ModalEditPreventProps {
  openModal: boolean;
  handleClose: () => void;
  data: PreventMaintenanceItem;
  mode: string;
}

const ModalEditPrevent: React.FC<ModalEditPreventProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createPreventive = useCreatePreventiveMaintenance();
  const updateMutation = useUpdatePreventiveMaintenance({
    id: data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    motorOil: false,
    oilFilters: false,
    fuelFilters: false,
    airFilters: false,
    transmissionOil: false,
    periodType: "",
    maintenancePeriod: "",
    maintenanceDate: "",
    nextMaintenancePeriod: "",
    amountPaid: 0,
    invoiceNumber: "",
    observations: "",
    heavyMachineryId: 0,
  });
  const [errors, setErrors] = useState({
    periodType: false,
    maintenancePeriod: false,
    maintenanceDate: false,
    nextMaintenancePeriod: false,
    amountPaid: false,
    invoiceNumber: false,
    heavyMachineryId: false,
  });
  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = Number(event.target.value);
    formData.heavyMachineryId = selectedValue;
    setSelectedMachinery(selectedValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      heavyMachineryId: false, // Limpia el error si se selecciona una opción válida
    }));
  };
  useEffect(() => {
    if (openModal && data) {
      setFormData({
        motorOil: data.motorOil,
        oilFilters: data.oilFilters,
        fuelFilters: data.fuelFilters,
        airFilters: data.airFilters,
        transmissionOil: data.transmissionOil,
        periodType: data.periodType || "",
        maintenancePeriod: data.maintenancePeriod || "",
        maintenanceDate: data.maintenanceDate || "",
        nextMaintenancePeriod: data.nextMaintenancePeriod || "",
        amountPaid: data.amountPaid || 0,
        invoiceNumber: data.invoiceNumber || "",
        observations: data.observations || "",
        heavyMachineryId: data.heavyMachineryId || 0,
      });
    }
  }, [openModal, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (value !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const newErrors = {
        periodType: formData.periodType === "",
        maintenancePeriod: formData.maintenancePeriod === "",
        maintenanceDate: formData.maintenanceDate === "",
        nextMaintenancePeriod: formData.nextMaintenancePeriod === "",
        amountPaid: formData.amountPaid === 0,
        invoiceNumber: formData.invoiceNumber === "",
        heavyMachineryId: mode === "create" && !selectedMachinery,
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some(
        (error) => error === true
      );
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
          await onCreatePrevent(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdatePrevent(body);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        handleClose();
      }
    },
    [
      formData,
      mode,
      selectedMachinery,
      useCreatePreventiveMaintenance,
      useUpdatePreventiveMaintenance,
      handleClose,
    ]
  );

  const onCreatePrevent = async (data: PreventMaintenanceItem) => {
    try {
      const response = await createPreventive.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdatePrevent = async (data: PreventMaintenanceItem) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const checkboxLabels = {
    motorOil: "Aceite de Motor",
    oilFilters: "Filtros de Aceite",
    fuelFilters: "Filtros de Combustible",
    airFilters: "Filtros de Aire",
    transmissionOil: "Aceite de Transmisión",
  };
  const textInputLabels = {
    periodType: "Tipo de Período",
    maintenancePeriod: "Período de Mantenimiento",
    nextMaintenancePeriod: "Próximo Período de Mantenimiento",
    invoiceNumber: "Número de Factura",
    observations: "Observaciones",
  };
  const modalTitle =
    mode === "create"
      ? "REGISTRA UN NUEVO MANTENIMIENTO PREV."
      : "ACTUALIZAR MANTENIMIENTO - CÓDIGO ";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";
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
          id={data.id + "" || ""} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="pb-5 pl-5 pr-5 pt-1">
          <Box component="form" onSubmit={handleSubmit}>
            {loading ? (
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CircularProgress /> {/* Indicador de carga */}
              </Grid>
            ) : (
              <Grid container spacing={2} className="pt-3">
                <Grid item xs={12} sm={12}>
                  {/* Text Inputs */}
                  {[
                    "periodType",
                    "maintenancePeriod",
                    "nextMaintenancePeriod",
                    "invoiceNumber",
                    "observations",
                  ].map((item) => (
                    <TextField
                      sx={{ paddingBottom: 1 }}
                      key={item}
                      fullWidth
                      size="small"
                      label={
                        textInputLabels[item as keyof typeof textInputLabels]
                      } // Mostrar el título en español
                      name={item}
                      value={formData[item as keyof typeof formData]}
                      onChange={handleChange}
                      error={errors[item as keyof typeof formData]}
                      helperText={
                        errors[item as keyof typeof formData]
                          ? "Campo requerido"
                          : ""
                      }
                    />
                  ))}

                  {/* Date Input */}
                  <TextField
                    sx={{ paddingBottom: 1 }}
                    fullWidth
                    label="Fecha de mantenimiento"
                    name="maintenanceDate"
                    type="date"
                    size="small"
                    value={formData.maintenanceDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    error={errors.maintenanceDate}
                    helperText={errors.maintenanceDate ? "Campo requerido" : ""}
                  />

                  {/* Number Input */}
                  <TextField
                    sx={{ paddingBottom: 1 }}
                    fullWidth
                    label="Monto pagado"
                    name="amountPaid"
                    type="number"
                    size="small"
                    value={formData.amountPaid}
                    onChange={handleChange}
                    error={errors.amountPaid}
                    helperText={errors.amountPaid ? "Campo requerido" : ""}
                  />
                  <div className="text text-blue-950">
                  <Typography variant="button">{"DATOS ADICIONALES"}</Typography>
                  </div>
                  {Object.keys(checkboxLabels).map((item) => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          color="success"
                          checked={formData[item as keyof typeof formData]}
                          onChange={handleChange}
                          name={item}
                        />
                      }
                      label={
                        checkboxLabels[item as keyof typeof checkboxLabels]
                      } // Mostrar el título en español
                    />
                  ))}
                  {mode === "create" ? (
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
                  ) : (
                    <></>
                  )}
                </Grid>

                <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                  <ButtonDefault title={buttonText} />
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditPrevent;
