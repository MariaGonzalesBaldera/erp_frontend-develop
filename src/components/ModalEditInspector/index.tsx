import React, { useState } from "react";
import { MachineryInspectionItem } from "../../types";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styleModal } from "../../style/StyleModal";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import ButtonDefault from "../ButtonDefault";

interface ModalEditDocumentProps {
  openModal: boolean;
  handleClose: () => void;
  data: MachineryInspectionItem;
}

const ModalEditInspector: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
}) => {
  const [formData, setFormData] = useState({
    projectName: data.projectName,
    unitData: data.unitData,
    activity: data.activity,
    location: data.location,
    registrationDate: data.registrationDate,
    operator: data.operator,
    residentEngineer: data.residentEngineer,
    ssoma: data.ssoma,
    observations: data.observations,
    frontLights: data.frontLights,
    rearLights: data.rearLights,
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
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const handleSubmit = () => {
    //handleSave(formData);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        <Grid
          container
          className="pl-5"
          sx={{
            width: "100%",
            textAlign: "end",
            height: "2.5rem",
            backgroundColor: themeNew.palette.primary.main,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ color: "white" }}
            id="modal-modal-title"
            variant="button"
            component="h2"
          >
            {"EDITAR DETALLE DEL DOCUMENTO #"} {data.cabin}
          </Typography>
          <IconButton sx={{ color: "white" }} onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>

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
            <TextField
              label="Fecha de registro"
              variant="outlined"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              fullWidth
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

            {/* Campos booleanos */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.frontLights}
                  onChange={handleChange}
                  name="frontLights"
                />
              }
              label="Luces delanteras"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rearLights}
                  onChange={handleChange}
                  name="rearLights"
                />
              }
              label="Luces traseras"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rolloverProtection}
                  onChange={handleChange}
                  name="rolloverProtection"
                />
              }
              label="Protección antivuelco"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.seatbelt}
                  onChange={handleChange}
                  name="seatbelt"
                />
              }
              label="Cinturón de seguridad"
            />
            {/* Añade aquí el resto de los CheckInspectionCards con Checkboxes */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.bucketConditionAndOperation}
                  onChange={handleChange}
                  name="bucketConditionAndOperation"
                />
              }
              label="Estado y funcionamiento del cubo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.seatCondition}
                  onChange={handleChange}
                  name="seatCondition"
                />
              }
              label="Estado del asiento"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.windows}
                  onChange={handleChange}
                  name="windows"
                />
              }
              label="Ventanas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.cabin}
                  onChange={handleChange}
                  name="cabin"
                />
              }
              label="Cabina"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.reverseAlarm}
                  onChange={handleChange}
                  name="reverseAlarm"
                />
              }
              label="Alarma de marcha atrás"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.accessLadderAndSupports}
                  onChange={handleChange}
                  name="accessLadderAndSupports"
                />
              }
              label="Escalera de acceso y soportes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.mirrors}
                  onChange={handleChange}
                  name="mirrors"
                />
              }
              label="Espejos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.horn}
                  onChange={handleChange}
                  name="horn"
                />
              }
              label="Bocina"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.controlLevers}
                  onChange={handleChange}
                  name="controlLevers"
                />
              }
              label="Palancas de control"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.pedals}
                  onChange={handleChange}
                  name="pedals"
                />
              }
              label="Pedales"
            />
            {/* Continuar agregando los campos restantes de tipo booleano */}
          </div>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault
                onClick={handleOpenUpdateModal}
                title="ACTUALIZAR"
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalEditInspector;
