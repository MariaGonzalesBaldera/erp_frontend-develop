import { Box, Modal } from "@mui/material";
import React from "react";
import { PreventMaintenanceItem } from "../../types";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";

interface ModalMoreDetailProps {
  openModal: boolean;
  handleClose: () => void;
  data: PreventMaintenanceItem;
}

const ModalMoreDetail: React.FC<ModalMoreDetailProps> = ({
  openModal,
  handleClose,
  data,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalInspection}>
        <HeaderModal
          titleHeader={"DETALLE DEL MANTENIMIENTO"}
          id={"#"} //aqui va el id
          handleClose={handleClose}
        />
        {data && (
          <div className="bg-background  w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Código de identificación:
                </span>
                <span className="text-sm font-bold">{data.id}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Descripción:
                </span>
                <span className="text-sm font-bold">{data.description}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Cantidad pagada:
                </span>
                <span className="text-sm font-bold">{data.amount_paid}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Operador:
                </span>
                <span className="text-sm font-bold">{data.operator}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Nombre del proyecto:
                </span>
                <span className="text-sm font-bold">{data.project_name}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Inicio de conducción:
                </span>
                <span className="text-sm font-bold">{data.driving_start}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Fin de conducción:
                </span>
                <span className="text-sm font-bold">{data.driving_end}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Observaciones:
                </span>
                <span className="text-sm font-bold">{data.observations}</span>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalMoreDetail;
