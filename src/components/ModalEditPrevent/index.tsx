import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  TextField,
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
    id: Number(data.id),
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    amountPaid: 0,
    invoiceNumber: "",
    observations: "",
    heavyMachineryId: "",
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

  useEffect(() => {
    if (openModal && data) {
      setFormData({
        id: data.id || "",
        motorOil: data.motorOil ,
        oilFilters: data.oilFilters ,
        fuelFilters: data.fuelFilters ,
        airFilters: data.airFilters ,
        transmissionOil: data.transmissionOil ,
        periodType: data.periodType || "",
        maintenancePeriod: data.maintenancePeriod || "",
        maintenanceDate: data.maintenanceDate || "",
        nextMaintenancePeriod: data.nextMaintenancePeriod || "",
        amountPaid: data.amountPaid || 0,
        invoiceNumber: data.invoiceNumber || "",
        observations: data.observations || "",
        heavyMachineryId: data.heavyMachineryId+"" || "",
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
        heavyMachineryId: mode === "create" && selectedMachinery === 0,
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
            periodType: formData.periodType,
            maintenancePeriod: formData.maintenancePeriod,
            maintenanceDate: formData.maintenanceDate,
            nextMaintenancePeriod: formData.nextMaintenancePeriod,
            amountPaid: formData.amountPaid,
            invoiceNumber: formData.invoiceNumber,
            heavyMachineryId: selectedMachinery,
          };
          console.log("body.heavyMachineryId ", body.heavyMachineryId);
          await onCreatePrevent(body); // Llamada para crear
        } else {
          body = {
            periodType: formData.periodType,
            maintenancePeriod: formData.maintenancePeriod,
            maintenanceDate: formData.maintenanceDate,
            nextMaintenancePeriod: formData.nextMaintenancePeriod,
            amountPaid: formData.amountPaid,
            invoiceNumber: formData.invoiceNumber,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdatePrevent(body); // Llamada para actualizar
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); // Finalizar la carga
        handleClose(); // Cerrar el modal
      }
    },
    [
      formData,
      mode,
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

  const modalTitle =
    mode === "create" ? "CREAR NUEVO REGISTRO" : "EDITAR REGISTRO";

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

  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedMachinery(Number(event.target.value));
    // errors.heavyMachineryId = false;
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
          id={formData.id + "" || ""} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            {loading ? 
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CircularProgress /> {/* Indicador de carga */}
              </Grid>
             : 
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                  {[
                    "motorOil",
                    "oilFilters",
                    "fuelFilters",
                    "airFilters",
                    "transmissionOil",
                  ].map((item) => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          checked={formData[item as keyof typeof formData]}
                          onChange={handleChange}
                          name={item}
                        />
                      }
                      label={item.replace(/([A-Z])/g, " $1")}
                    />
                  ))}

                  {/* Text Inputs */}
                  {[
                    "periodType",
                    "maintenancePeriod",
                    "nextMaintenancePeriod",
                    "invoiceNumber",
                    "observations",
                  ].map((item) => (
                    <TextField sx={{paddingBottom:1}}
                      key={item}
                      fullWidth
                      size="small"
                      label={item.replace(/([A-Z])/g, " $1")}
                      name={item}
                      value={formData[item as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  ))}

                  {/* Date Input */}
                  <TextField sx={{paddingBottom:1}}
                    fullWidth
                    label="Maintenance Date"
                    name="maintenanceDate"
                    type="date"
                    size="small"
                    value={formData.maintenanceDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />

                  {/* Number Input */}
                  <TextField sx={{paddingBottom:1}}
                    fullWidth
                    label="Amount Paid"
                    name="amountPaid"
                    type="number"
                    size="small"
                    value={formData.amountPaid}
                    onChange={handleChange}
                  />
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
                          //   error={errors.heavyMachineryId}
                          //   helperText={
                          //     errors.heavyMachineryId ? "Campo requerido" : ""
                          //   }
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
            }
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditPrevent;
