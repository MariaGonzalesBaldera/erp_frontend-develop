import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { MachineryInspectionItem } from "../../types";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styleModalInspection } from "../../style/StyleModal";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
interface ModalMoreDetailProps {
  openModal: boolean;
  handleClose: () => void;
  data: MachineryInspectionItem;
}

const ModalMoreDetailInspection: React.FC<ModalMoreDetailProps> = ({
  openModal,
  handleClose,
  data,
}) => {
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModalInspection}>
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
              {"DETALLE DEL MANTENIMIENTO"}
            </Typography>
            <IconButton sx={{ color: "white" }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
          {data && (
            <div className="bg-background p-6 w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-4">
                {/* Primera columna */}
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Nombre del proyecto
                    </span>
                    <span className="text-lg font-bold">
                      {data.projectName}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Datos de unidad
                    </span>
                    <span className="text-lg font-bold">{data.unitData}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Actividad
                    </span>
                    <span className="text-lg font-bold">{data.activity}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Locación
                    </span>
                    <span className="text-lg font-bold">{data.location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Fecha de registro
                    </span>
                    <span className="text-lg font-bold">
                      {data.registrationDate}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Nombre del operador
                    </span>
                    <span className="text-lg font-bold">{data.operator}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Ingeniero Encargado
                    </span>
                    <span className="text-lg font-bold">
                      {data.residentEngineer}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Ssoma
                    </span>
                    <span className="text-lg font-bold">{data.ssoma}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Observaciones
                    </span>
                    <span className="text-lg font-bold">
                      {data.observations}
                    </span>
                  </div>
                </div>

                {/* Segunda columna */}
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Luces delateras{data.frontLights} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Luces delateras {data.rearLights} <CheckBoxOutlineBlankIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Luces direccionales {data.directionalLights} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Protección antivuelco {data.rolloverProtection} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Cinturón de seguridad{data.seatbelt} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Estado y funcionamiento del cubo{data.bucketConditionAndOperation} <CheckBoxOutlineBlankIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Estado del asiento{data.seatCondition}<CheckBoxOutlineBlankIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Ventanas{data.windows} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Cabina{data.cabin} <CheckBoxIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Alarma de marcha atrás{data.reverseAlarm}<CheckBoxOutlineBlankIcon fontSize="small" sx={{color:"#aaa5fc"}}/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Escalera de acceso y soportes{data.accessLadderAndSupports}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Espejo{data.mirrors}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Bocina{data.horn} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Palancas de control{data.controlLevers}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Pedales{data.pedals} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Cilindros de elevación{data.liftCylinders} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Cilindros de articulación{data.articulationCylinders}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Estado de la puerta con cerradura  {data.doorConditionWithLock}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Batería {data.battery} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Instalación eléctrica {data.electricalInstallation}<CheckBoxOutlineBlankIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Dirección{data.steering} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Motor{data.engine} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Radiador {data.radiator} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Indicadores{data.indicators} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Sistema de frenos{data.brakingSystem} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Enfriador de aceite{data.oilCooler} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Bloque del sistema hidráulico{data.hydraulicSystemBlock} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Mangueras{data.hoses} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Correas{data.belts} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Sistema eléctrico{data.electricalSystem} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Mecanismo de giro{data.swingMechanism} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Freno del mecanismo de giro{data.swingMechanismBrake} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Control de elevación del brazo{data.armLiftControls} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                      Oruga derecha{data.rightTrack} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Oruga izquierda{data.leftTrack} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Kit de derrames{data.spillKit} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Extintor de 20 libras{data.fireExtinguisher20Lbs} <CheckBoxIcon/>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm font-medium">
                    Conos de seguridad {data.safetyCones} <CheckBoxIcon/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalMoreDetailInspection;