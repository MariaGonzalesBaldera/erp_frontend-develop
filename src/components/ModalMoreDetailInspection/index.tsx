import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { MachineryInspectionItem } from "../../types";
import { styleModalInspection } from "../../style/StyleModal";
import CheckInspectionCard from "../CheckInspectionCard";
import HeaderModal from "../HeaderModal";
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
          <HeaderModal
          titleHeader={"DETALLE DE LA INSPECCIÓN CÓDIGO"}
          id={data.id || ""} //aqui va el id
          handleClose={handleClose}
        />
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

          <Typography className="p-2" id="modal-modal-title" variant="button" component="h2" fontWeight={"bold"} >
            {"DETALLES"}
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <CheckInspectionCard title="Luces delateras" data={data.frontLights} />
              <CheckInspectionCard title="Luces traseras" data={data.rearLights} />
              <CheckInspectionCard title="Luces direccionales" data={data.directionalLights} />
              <CheckInspectionCard title="Protección antivuelco" data={data.rolloverProtection} />
              <CheckInspectionCard title="Cinturón de seguridad" data={data.seatbelt} />

              <CheckInspectionCard title="Estado y funcionamiento del cubo" data={data.bucketConditionAndOperation} />
              <CheckInspectionCard title="Estado del asiento" data={data.seatCondition} />
              <CheckInspectionCard title="Ventanas" data={data.windows} />
              <CheckInspectionCard title="Cabina" data={data.cabin} />
              <CheckInspectionCard title="Alarma de marcha atrás" data={data.reverseAlarm} />
              <CheckInspectionCard title="Escalera de acceso y soportes" data={data.accessLadderAndSupports} />
              <CheckInspectionCard title="Espejo" data={data.mirrors} />
              <CheckInspectionCard title="Bocina" data={data.horn} />
              <CheckInspectionCard title="Palancas de control" data={data.controlLevers} />
              <CheckInspectionCard title="Pedales" data={data.pedals} />
              <CheckInspectionCard title="Cilindros de elevación" data={data.liftCylinders} />
              <CheckInspectionCard title="Cilindros de articulación" data={data.articulationCylinders} />
              <CheckInspectionCard title="Estado de la puerta con cerradura " data={data.doorConditionWithLock} />
              <CheckInspectionCard title="Batería " data={data.battery} />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <CheckInspectionCard title="Instalación eléctrica" data={data.electricalInstallation} />
              <CheckInspectionCard title="Dirección" data={data.steering} />
              <CheckInspectionCard title="Motor" data={data.engine} />
              <CheckInspectionCard title="Radiador" data={data.radiator} />
              <CheckInspectionCard title="Indicadores" data={data.indicators} />
              <CheckInspectionCard title="Sistema de frenos" data={data.brakingSystem} />
              <CheckInspectionCard title="Enfriador de aceite" data={data.oilCooler} />
              <CheckInspectionCard title="Bloque del sistema hidráulico" data={data.hydraulicSystemBlock} />
              <CheckInspectionCard title="Mangueras" data={data.hoses} />
              <CheckInspectionCard title="Correas" data={data.belts} />
              <CheckInspectionCard title="Sistema eléctrico" data={data.electricalSystem} />
              <CheckInspectionCard title="Mecanismo de giro" data={data.swingMechanism} />
              <CheckInspectionCard title="Freno del mecanismo de giro" data={data.swingMechanismBrake} />
              <CheckInspectionCard title="Control de elevación del brazo" data={data.armLiftControls} />
              <CheckInspectionCard title="Oruga derecha" data={data.rightTrack} />
              <CheckInspectionCard title="Oruga izquierda" data={data.leftTrack} />
              <CheckInspectionCard title="Kit de derrames" data={data.spillKit} />
              <CheckInspectionCard title="Extintor de 20 libras" data={data.fireExtinguisher20Lbs} />
              <CheckInspectionCard title="Conos de seguridad" data={data.safetyCones} />
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalMoreDetailInspection;
