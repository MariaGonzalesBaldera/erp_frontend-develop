import React, { useCallback, useEffect, useState } from "react";
import { MachineryInspectionItem } from "../../types";
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

import { styleModalInspection } from "../../style/StyleModal";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import {
  useCreateInspection,
  useUpdateInspection,
} from "../../hooks/useMachineryInspection";
import {
  InspectionResponse,
  MachineryResponse,
} from "../../domain/machinery.interface";
import { capitalizer, formatDateForAPI } from "../../utils/capitalize";
import { useGetMachineryList } from "../../hooks/useMaquinaria";

interface ModalEditDocumentProps {
  openModal: boolean;
  handleClose: () => void;
  data: InspectionResponse;
  mode: string;
}

const ModalEditInspector: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createInspector = useCreateInspection();
  const updateMutation = useUpdateInspection({
    id: data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: data.projectName || "",
    unitData: data.unitData || "",
    activity: data.activity || "",
    location: data.location || "",
    registrationDate: data.registrationDate || "",
    operator: data.operator || "",
    residentEngineer: data.residentEngineer || "",
    ssoma: data.ssoma || "",
    observations: data.observations || "",
    frontLights: data.frontLights || false,
    rearLights: data.rearLights || false,
    directionalLights: data.directionalLights || false,
    rolloverProtection: data.rolloverProtection || false,
    seatbelt: data.seatbelt || false,
    bucketConditionAndOperation: data.bucketConditionAndOperation || false,
    seatCondition: data.seatCondition || false,
    windows: data.windows || false,
    cabin: data.cabin || false,
    reverseAlarm: data.reverseAlarm || false,
    accessLadderAndSupports: data.accessLadderAndSupports || false,
    mirrors: data.mirrors || false,
    horn: data.horn || false,
    controlLevers: data.controlLevers || false,
    pedals: data.pedals || false,
    liftCylinders: data.liftCylinders || false,
    articulationCylinders: data.articulationCylinders || false,
    doorConditionWithLock: data.doorConditionWithLock || false,
    battery: data.battery || false,
    electricalInstallation: data.electricalInstallation || false,
    steering: data.steering || false,
    engine: data.engine || false,
    radiator: data.radiator || false,
    indicators: data.indicators || false,
    brakingSystem: data.brakingSystem || false,
    oilCooler: data.oilCooler || false,
    hydraulicSystemBlock: data.hydraulicSystemBlock || false,
    hoses: data.hoses || false,
    belts: data.belts || false,
    electricalSystem: data.electricalSystem || false,
    swingMechanism: data.swingMechanism || false,
    swingMechanismBrake: data.swingMechanismBrake || false,
    armLiftControls: data.armLiftControls || false,
    rightTrack: data.rightTrack || false,
    leftTrack: data.leftTrack || false,
    spillKit: data.spillKit || false,
    fireExtinguisher20Lbs: data.fireExtinguisher20Lbs || false,
    safetyCones: data.safetyCones || false,
    heavyMachineryId: 0,
  });

  const [errors, setErrors] = useState({
    projectName: false,
    unitData: false,
    activity: false,
    location: false,
    registrationDate: false,
    operator: false,
    residentEngineer: false,
    ssoma: false,
    observations: false,
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectName: data.projectName || "",
      unitData: data.unitData || "",
      activity: data.activity || "",
      location: data.location || "",
      registrationDate: data.registrationDate || "",
      operator: data.operator || "",
      residentEngineer: data.residentEngineer || "",
      ssoma: data.ssoma || "",
      observations: data.observations || "",
      frontLights: data.frontLights,
      rearLights: data.rearLights,
      directionalLights: data.directionalLights,
      rolloverProtection: data.rolloverProtection,
      seatbelt: data.seatbelt,
      bucketConditionAndOperation: data.bucketConditionAndOperation,
      seatCondition: data.seatCondition,
      windows: data.windows,
      cabin: data.cabin,
      reverseAlarm: data.reverseAlarm,
      accessLadderAndSupports: data.accessLadderAndSupports,
      mirrors: data.mirrors,
      horn: data.horn,
      controlLevers: data.controlLevers,
      pedals: data.pedals,
      liftCylinders: data.liftCylinders,
      articulationCylinders: data.articulationCylinders,
      doorConditionWithLock: data.doorConditionWithLock,
      battery: data.battery,
      electricalInstallation: data.electricalInstallation,
      steering: data.steering,
      engine: data.engine,
      radiator: data.radiator,
      indicators: data.indicators,
      brakingSystem: data.brakingSystem,
      oilCooler: data.oilCooler,
      hydraulicSystemBlock: data.hydraulicSystemBlock,
      hoses: data.hoses,
      belts: data.belts,
      electricalSystem: data.electricalSystem,
      swingMechanism: data.swingMechanism,
      swingMechanismBrake: data.swingMechanismBrake,
      armLiftControls: data.armLiftControls,
      rightTrack: data.rightTrack,
      leftTrack: data.leftTrack,
      spillKit: data.spillKit,
      fireExtinguisher20Lbs: data.fireExtinguisher20Lbs,
      safetyCones: data.safetyCones,
      heavyMachineryId: data.heavyMachineryId || 0,
    }));
  }, [openModal, data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
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

  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const newErrors = {
        projectName: formData.projectName === "",
        unitData: formData.unitData === "",
        activity: formData.activity === "",
        location: formData.location === "",
        registrationDate: formData.registrationDate === "",
        operator: formData.operator === "",
        residentEngineer: formData.residentEngineer === "",
        ssoma: formData.ssoma === "",
        observations: formData.observations === "",
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
          await onCreateInspector(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdateInspector(body);
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
      useCreateInspection,
      useUpdateInspection,
      handleClose,
    ]
  );

  const onCreateInspector = async (data: InspectionResponse) => {
    try {
      const response = await createInspector.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateInspector = async (data: InspectionResponse) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const modalTitle =
    mode === "create" ? "CREAR INSPECCIÓN" : "EDITAR DETALLE DE LA INSPECCIÓN";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";
  const checkboxLabels2 = {
    frontLights: "Luces delanteras",
    rearLights: "Luces traseras",
    directionalLights: "Luces direccionales",
    rolloverProtection: "Protección antivuelco",
    seatbelt: "Cinturón de seguridad",
    bucketConditionAndOperation: "Estado y funcionamiento del cubo",
    seatCondition: "Estado del asiento",
    windows: "Ventanas",
    cabin: "Cabina",
    reverseAlarm: "Alarma de marcha atrás",
    accessLadderAndSupports: "Escalera de acceso y soportes",
    mirrors: "Espejos",
    horn: "Bocina",
    controlLevers: "Palancas de control",
    pedals: "Pedales",
    liftCylinders: "Cilindros de elevación",
    articulationCylinders: "Cilindros de articulación",
    doorConditionWithLock: "Estado de la puerta con cerradura",
    battery: "Batería",
    electricalInstallation: "Instalación eléctrica",
    steering: "Dirección",
    engine: "Motor",
    radiator: "Radiador",
    indicators: "Indicadores",
    brakingSystem: "Sistema de frenos",
    oilCooler: "Enfriador de aceite",
    hydraulicSystemBlock: "Bloque del sistema hidráulico",
    hoses: "Mangueras",
    belts: "Correas",
    electricalSystem: "Sistema eléctrico",
    swingMechanism: "Mecanismo de giro",
    swingMechanismBrake: "Freno del mecanismo de giro",
    armLiftControls: "Control de elevación del brazo",
    rightTrack: "Oruga derecha",
    leftTrack: "Oruga izquierda",
    spillKit: "Kit de derrames",
    fireExtinguisher20Lbs: "Extintor de 20 libras",
    safetyCones: "Conos de seguridad",
  };
  //recuperacion de maquinarias
  const { data: machineryData, isLoading, error } = useGetMachineryList();
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
          id={""} //aqui va el id
          handleClose={handleClose}
        />
        {loading ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <CircularProgress /> {/* Indicador de carga */}
          </Grid>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="bg-background p-6 w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Campos de texto */}
              <TextField
                size="small"
                label="Nombre del proyecto"
                variant="outlined"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                fullWidth
                error={errors.projectName}
                helperText={errors.projectName ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Datos de unidad"
                variant="outlined"
                name="unitData"
                value={formData.unitData}
                onChange={handleChange}
                fullWidth
                error={errors.unitData}
                helperText={errors.unitData ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Actividad"
                variant="outlined"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                fullWidth
                error={errors.activity}
                helperText={errors.activity ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Locación"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                error={errors.location}
                helperText={errors.location ? "Campo requerido" : ""}
              />
              <DatePickerForm
                dateValue={formData.registrationDate}
                labelValue="Fecha de registro"
                handleDateChange={(date) =>
                  handleDateChange("registrationDate", formatDateForAPI(date))
                }
                nameValue="registrationDate"
                error={errors.registrationDate}
                helperText={errors.registrationDate ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Nombre del operador"
                variant="outlined"
                name="operator"
                value={formData.operator}
                onChange={handleChange}
                fullWidth
                error={errors.operator}
                helperText={errors.operator ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Ingeniero Encargado"
                variant="outlined"
                name="residentEngineer"
                value={formData.residentEngineer}
                onChange={handleChange}
                fullWidth
                error={errors.residentEngineer}
                helperText={errors.residentEngineer ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Ssoma"
                variant="outlined"
                name="ssoma"
                value={formData.ssoma}
                onChange={handleChange}
                fullWidth
                error={errors.ssoma}
                helperText={errors.ssoma ? "Campo requerido" : ""}
              />
              <TextField
                size="small"
                label="Observaciones"
                variant="outlined"
                name="observations"
                value={formData.observations}
                onChange={handleChange}
                fullWidth
                error={errors.observations}
                helperText={errors.observations ? "Campo requerido" : ""}
              />
            </div>
            {mode == "create" ? (
              <Grid item xs={12} sm={6} className="pt-4">
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
            {/* Campos booleanos */}
            <Typography
              className="p-2"
              id="modal-modal-title"
              variant="button"
              component="h2"
              fontWeight={"bold"}
            >
              {"DETALLES"}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.keys(checkboxLabels2).map((item) => (
                <FormControlLabel
                  key={item}
                  sx={{ height: 30, fontSizeAdjust: "0.47" }} // Aplica los mismos estilos
                  control={
                    <Checkbox
                      color="success"
                      checked={formData[item as keyof typeof formData]}
                      onChange={handleChange}
                      name={item}
                    />
                  }
                  label={checkboxLabels2[item as keyof typeof checkboxLabels2]} // Mostrar el título en español
                />
              ))}
            </div>

            <Grid container justifyContent="flex-end" spacing={2} mt={2}>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <ButtonDefault
                  onClick={handleOpenUpdateModal}
                  title={buttonText}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalEditInspector;
