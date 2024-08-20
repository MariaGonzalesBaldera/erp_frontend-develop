import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { MachineryInspectionItem } from "../../types";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styleModalInspection } from "../../style/StyleModal";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
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
              {"DETALLE DE LA INSPECCIÓN"}
            </Typography>
            <IconButton sx={{ color: "white" }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Nombre del proyecto:
              </span>
              <span className="text-sm font-bold">{data.projectName}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Datos de unidad:
              </span>
              <span className="text-sm font-bold">{data.unitData}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Actividad:
              </span>
              <span className="text-sm font-bold">{data.activity}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Locación:
              </span>
              <span className="text-sm font-bold">{data.location}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Fecha de registro:
              </span>
              <span className="text-sm font-bold">{data.registrationDate}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Nombre del operador:
              </span>
              <span className="text-sm font-bold">{data.operator}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Ingeniero Encargado:
              </span>
              <span className="text-sm font-bold">{data.residentEngineer}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Ssoma:
              </span>
              <span className="text-sm font-bold">{data.ssoma}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-2 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Observaciones:
              </span>
              <span className="text-sm font-bold">{data.observations}</span>
            </div>
          </div>

          <Typography
            className="p-2"
            id="modal-modal-title"
            variant="button"
            component="h2"
            fontWeight={"bold"}
          >
            {"DETALLES"}
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-medium">
                Luces delateras{data.frontLights}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>{" "}
              <span className="text-muted-foreground text-sm font-medium">
                Luces delateras {data.rearLights}{" "}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Luces direccionales {data.directionalLights}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Protección antivuelco {data.rolloverProtection}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Cinturón de seguridad{data.seatbelt}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Estado y funcionamiento del cubo
                {data.bucketConditionAndOperation}{" "}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Estado del asiento{data.seatCondition}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Ventanas{data.windows}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Cabina{data.cabin}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Alarma de marcha atrás{data.reverseAlarm}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Escalera de acceso y soportes{data.accessLadderAndSupports}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Espejo{data.mirrors}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Bocina{data.horn}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Palancas de control{data.controlLevers}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Pedales{data.pedals}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Cilindros de elevación{data.liftCylinders}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Cilindros de articulación{data.articulationCylinders}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Estado de la puerta con cerradura {data.doorConditionWithLock}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Batería {data.battery}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Instalación eléctrica {data.electricalInstallation}
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  sx={{ color: "#aaa5fc" }}
                />
              </span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-medium">
                Dirección{data.steering}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Motor{data.engine}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Radiador {data.radiator}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Indicadores{data.indicators}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Sistema de frenos{data.brakingSystem}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Enfriador de aceite{data.oilCooler}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Bloque del sistema hidráulico{data.hydraulicSystemBlock}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Mangueras{data.hoses}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Correas{data.belts}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Sistema eléctrico{data.electricalSystem}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Mecanismo de giro{data.swingMechanism}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Freno del mecanismo de giro{data.swingMechanismBrake}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Control de elevación del brazo{data.armLiftControls}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Oruga derecha{data.rightTrack}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Oruga izquierda{data.leftTrack}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Kit de derrames{data.spillKit}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Extintor de 20 libras{data.fireExtinguisher20Lbs}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Conos de seguridad {data.safetyCones}{" "}
                <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
              </span>
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalMoreDetailInspection;
