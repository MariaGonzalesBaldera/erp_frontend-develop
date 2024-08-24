import React, { useCallback, useEffect, useState } from "react";
import { MachineryInspectionItem } from "../../types";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { styleModalInspection } from "../../style/StyleModal";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";

interface ModalEditDocumentProps {
  openModal: boolean;
  handleClose: () => void;
  data: MachineryInspectionItem;
  mode: string;
}

const ModalEditInspector: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
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
  });

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
    }));
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleDateChange = useCallback(
    (date) => {
      setFormData((prevData) => ({
        ...prevData,
        maintenance_date: date,
      }));
    },
    [setFormData]
  );

  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const handleSubmit = () => {
    //handleSave(formData);
  };

  const modalTitle =
    mode === "create" ? "CREAR INSPECCIÓN" : "EDITAR DETALLE DE LA INSPECCIÓN";

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

        <div className="bg-background p-6 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campos de texto */}
            <TextField
              label="Nombre del proyecto"
              variant="outlined"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Datos de unidad"
              variant="outlined"
              name="unitData"
              value={formData.unitData}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Actividad"
              variant="outlined"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Locación"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
            />
            <DatePickerForm
              dateValue={formData.registrationDate}
              labelValue="Fecha de registro"
              handleDateChange={handleDateChange}
            />
            <TextField
              label="Nombre del operador"
              variant="outlined"
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Ingeniero Encargado"
              variant="outlined"
              name="residentEngineer"
              value={formData.residentEngineer}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Ssoma"
              variant="outlined"
              name="ssoma"
              value={formData.ssoma}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Observaciones"
              variant="outlined"
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              fullWidth
            />
          </div>

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
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.frontLights}
                  onChange={handleChange}
                  name="frontLights"
                />
              }
              label="Luces delanteras"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.rearLights}
                  onChange={handleChange}
                  name="rearLights"
                />
              }
              label="Luces traseras"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.directionalLights}
                  onChange={handleChange}
                  name="directionalLights"
                />
              }
              label="Luces direccionales"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.rolloverProtection}
                  onChange={handleChange}
                  name="rolloverProtection"
                />
              }
              label="Protección antivuelco"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.seatbelt}
                  onChange={handleChange}
                  name="seatbelt"
                />
              }
              label="Cinturón de seguridad"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.bucketConditionAndOperation}
                  onChange={handleChange}
                  name="bucketConditionAndOperation"
                />
              }
              label="Estado y funcionamiento del cubo"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.seatCondition}
                  onChange={handleChange}
                  name="seatCondition"
                />
              }
              label="Estado del asiento"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.windows}
                  onChange={handleChange}
                  name="windows"
                />
              }
              label="Ventanas"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.cabin}
                  onChange={handleChange}
                  name="cabin"
                />
              }
              label="Cabina"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.reverseAlarm}
                  onChange={handleChange}
                  name="reverseAlarm"
                />
              }
              label="Alarma de marcha atrás"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.accessLadderAndSupports}
                  onChange={handleChange}
                  name="accessLadderAndSupports"
                />
              }
              label="Escalera de acceso y soportes"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.mirrors}
                  onChange={handleChange}
                  name="mirrors"
                />
              }
              label="Espejos"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.horn}
                  onChange={handleChange}
                  name="horn"
                />
              }
              label="Bocina"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.controlLevers}
                  onChange={handleChange}
                  name="controlLevers"
                />
              }
              label="Palancas de control"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.pedals}
                  onChange={handleChange}
                  name="pedals"
                />
              }
              label="Pedales"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.liftCylinders}
                  onChange={handleChange}
                  name="liftCylinders"
                />
              }
              label="Cilindros de elevación"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.articulationCylinders}
                  onChange={handleChange}
                  name="articulationCylinders"
                />
              }
              label="Cilindros de articulación"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.doorConditionWithLock}
                  onChange={handleChange}
                  name="doorConditionWithLock"
                />
              }
              label="Estado de la puerta con cerradura"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.battery}
                  onChange={handleChange}
                  name="battery"
                />
              }
              label="Batería"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.electricalInstallation}
                  onChange={handleChange}
                  name="electricalInstallation"
                />
              }
              label="Instalación eléctrica"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.steering}
                  onChange={handleChange}
                  name="steering"
                />
              }
              label="Dirección"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.engine}
                  onChange={handleChange}
                  name="engine"
                />
              }
              label="Motor"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.radiator}
                  onChange={handleChange}
                  name="Radiador"
                />
              }
              label="radiator"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.indicators}
                  onChange={handleChange}
                  name="indicators"
                />
              }
              label="Indicadores"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.brakingSystem}
                  onChange={handleChange}
                  name="brakingSystem"
                />
              }
              label="Sistema de frenos"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.oilCooler}
                  onChange={handleChange}
                  name="oilCooler"
                />
              }
              label="Enfriador de aceite"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.hydraulicSystemBlock}
                  onChange={handleChange}
                  name="hydraulicSystemBlock"
                />
              }
              label="Bloque del sistema hidráulico"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.hoses}
                  onChange={handleChange}
                  name="hoses"
                />
              }
              label="Mangueras"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.belts}
                  onChange={handleChange}
                  name="belts"
                />
              }
              label="Correas"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.electricalSystem}
                  onChange={handleChange}
                  name="electricalSystem"
                />
              }
              label="Sistema eléctrico"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.swingMechanism}
                  onChange={handleChange}
                  name="swingMechanism"
                />
              }
              label="Mecanismo de giro"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.swingMechanismBrake}
                  onChange={handleChange}
                  name="swingMechanismBrake"
                />
              }
              label="Freno del mecanismo de giro"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.armLiftControls}
                  onChange={handleChange}
                  name="armLiftControls"
                />
              }
              label="Control de elevación del brazo"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.rightTrack}
                  onChange={handleChange}
                  name="rightTrack"
                />
              }
              label="Oruga derecha"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.leftTrack}
                  onChange={handleChange}
                  name="leftTrack"
                />
              }
              label="Oruga izquierda"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.spillKit}
                  onChange={handleChange}
                  name="spillKit"
                />
              }
              label="Kit de derrames"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.fireExtinguisher20Lbs}
                  onChange={handleChange}
                  name="fireExtinguisher20Lbs"
                />
              }
              label="Extintor de 20 libras"
            />
            <FormControlLabel
              sx={{ height: 30, fontSizeAdjust: "0.47" }}
              control={
                <Checkbox
                  color="success"
                  checked={formData.safetyCones}
                  onChange={handleChange}
                  name="safetyCones"
                />
              }
              label="Conos de seguridad"
            />
          </div>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault
                onClick={handleOpenUpdateModal}
                title={buttonText}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalEditInspector;
