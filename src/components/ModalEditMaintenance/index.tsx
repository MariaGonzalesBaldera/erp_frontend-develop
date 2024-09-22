import React, { useCallback, useEffect, useState } from "react";
import {
  CorrectiveMaintananceItem,
  ModalEditMaintenanceProps,
} from "../../types";
import { Box, Button, Grid, MenuItem, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import TimePickerForm from "../TimePickerForm";
import DatePickerForm from "../DatePickerForm";
import { MachineryResponse } from "../../domain/machinery.interface";
import { capitalizer, formatDateForAPI } from "../../utils/capitalize";
import {
  useCreateCorrective,
  useUpdateCorrective,
} from "../../hooks/useCorrectiveMaintenance";
import { useGetMachineryList } from "../../hooks/useMaquinaria";
import dayjs from "dayjs";

const ModalEditMaintenance: React.FC<ModalEditMaintenanceProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createMaintenance = useCreateCorrective();
  const updateMutation = useUpdateCorrective({
    id: data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    maintenanceDate: "",
    amountPaid: 0,
    operatorName: "",
    projectName: "",
    observations: "",
    invoiceNumber:"",
    drivingStart: "",
    drivingEnd: "",
    heavyMachineryId: 0,
  });
  const [errors, setErrors] = useState({
    description: false,
    maintenanceDate: false,
    amountPaid: false,
    operatorName: false,
    projectName: false,
    observations: false,
    invoiceNumber:false,
    drivingStart: false,
    drivingEnd: false,
    heavyMachineryId: false,
  });
  useEffect(() => {
    if (openModal) {
      setFormData({
        description: data.description || "",
        maintenanceDate: data.maintenanceDate || "",
        amountPaid: data.amountPaid || 0,
        operatorName: data.operatorName || "",
        projectName: data.projectName || "",
        observations: data.observations || "",
        invoiceNumber:data.invoiceNumber ||"",
        drivingStart: data.drivingStart || "",
        drivingEnd: data.drivingEnd || "",
        heavyMachineryId: data.heavyMachineryId || 0,
      });
    }
  }, [openModal, data]);

  const handleTimeChange = (newTime: dayjs.Dayjs | null, nameValue: string) => {
    if (newTime) {
      const formattedTime = newTime.format("YYYY-MM-DDTHH:mm:ss");

      setFormData((prevData) => ({
        ...prevData,
        [nameValue]: formattedTime,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        [nameValue]: false,
      }));
    }
  };

  const handleChange = useCallback(
    (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormData]
  );

  const handleDateChange = useCallback((name: string, date: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
    if (date !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const newErrors = {
        description: formData.description === "",
        maintenanceDate: formData.maintenanceDate === "",
        amountPaid: formData.amountPaid === 0,
        operatorName: formData.operatorName === "",
        projectName: formData.projectName === "",
        observations: formData.observations === "",
        invoiceNumber:formData.invoiceNumber === "",
        drivingStart: formData.drivingStart === "",
        drivingEnd: formData.drivingEnd === "",
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
          console.log("body ", body);
          await onCreateMantenance(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          console.log("body ", body);

          await onUpdateMantenance(body);
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
      useCreateCorrective,
      useUpdateCorrective,
      handleClose,
    ]
  );
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        files: Array.from(files),
      }));
    }
  };

  const onCreateMantenance = async (data: CorrectiveMaintananceItem) => {
    try {
      const response = await createMaintenance.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateMantenance = async (data: CorrectiveMaintananceItem) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const modalTitle =
    mode === "create" ? "CREAR NUEVO MANTENIMIENTO" : "EDITAR MANTENIMIENTO";

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
          id={""} //aqui va el id
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Descripción"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={errors.description}
                  helperText={errors.description ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerForm
                  dateValue={formData.maintenanceDate}
                  labelValue="Fecha de Mantenimiento"
                  handleDateChange={(date) =>
                    handleDateChange("maintenanceDate", formatDateForAPI(date))
                  }
                  nameValue="maintenanceDate"
                  error={errors.maintenanceDate}
                  helperText={errors.maintenanceDate ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
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
                  fullWidth
                  size="small"
                  label="Nombre del Operador"
                  name="operatorName"
                  value={formData.operatorName}
                  onChange={handleChange}
                  error={errors.operatorName}
                  helperText={errors.operatorName ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Nombre del Proyecto"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  error={errors.projectName}
                  helperText={errors.projectName ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  fullWidth
                  size="small"
                  label="Observaciones"
                  name="observations"
                  value={formData.observations}
                  onChange={handleChange}
                  error={errors.observations}
                  helperText={errors.observations ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  fullWidth
                  size="small"
                  label="Número de factura"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  error={errors.invoiceNumber}
                  helperText={errors.invoiceNumber ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerForm
                  handleTimeChange={handleTimeChange}
                  timeValue={formData.drivingStart}
                  nameValue="drivingStart"
                  label="Inicio de conduccion"
                  error={errors.drivingStart}
                  helperText={errors.drivingStart ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerForm
                  handleTimeChange={handleTimeChange}
                  timeValue={formData.drivingEnd}
                  nameValue="drivingEnd"
                  label="Fin de conduccion"
                  error={errors.drivingEnd}
                  helperText={errors.drivingEnd ? "Campo requerido" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="files"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                <label htmlFor="upload-photo">
                  <Button component="span" />Seleccione una foto<Button/>
                </label>
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
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditMaintenance;
