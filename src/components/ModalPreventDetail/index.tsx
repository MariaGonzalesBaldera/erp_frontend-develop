import React from "react";
import { PreventMaintenanceItem } from "../../types";
import { Box, Modal, Typography } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import CheckInspectionCard from "../CheckInspectionCard";
interface ModalPreventDetailProps {
  openModal: boolean;
  handleClose: () => void;
  data: PreventMaintenanceItem;
}
const ModalPreventDetail: React.FC<ModalPreventDetailProps> = ({
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
            titleHeader={"DETALLE - MANTENIMIENTO PREV, CÓDIGO "}
            id={data.id || ""} //aqui va el id
            handleClose={handleClose}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Tipo de periodo:
              </span>
              <span className="text-sm font-bold">{data.periodType}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Periodo de mantenimiento:
              </span>
              <span className="text-sm font-bold">{data.maintenanceDate}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Fecha de mantenimiento:
              </span>
              <span className="text-sm font-bold">{data.maintenanceDate}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Próximo periodo de mantenimiento:
              </span>
              <span className="text-sm font-bold">
                {data.nextMaintenancePeriod}
              </span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Cantidad pagada:
              </span>
              <span className="text-sm font-bold">{data.amountPaid}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Número de factura
              </span>
              <span className="text-sm font-bold">{data.invoiceNumber}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
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
              <CheckInspectionCard
                title="Aceite de motor"
                data={data.motorOil}
              />
              <CheckInspectionCard
                title="Filtro de aceite"
                data={data.oilFilters}
              />
              <CheckInspectionCard
                title="Filtro de combustible "
                data={data.fuelFilters}
              />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <CheckInspectionCard
                title="Filtro de aire"
                data={data.airFilters}
              />
              <CheckInspectionCard
                title="Aceite de transmisión"
                data={data.transmissionOil}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalPreventDetail;