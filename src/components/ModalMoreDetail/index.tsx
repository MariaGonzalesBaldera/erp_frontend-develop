import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { PreventMaintenanceItem } from "../../types";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
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
          <div className="bg-background p-6 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Código de identificación
                </span>
                <span className="text-lg font-bold">{data.id}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Descripción
                </span>
                <span className="text-lg font-bold">{data.description}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Fecha Mant.
                </span>
                <span className="text-lg font-bold">
                  {data.maintenance_date}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Cantidad pagada
                </span>
                <span className="text-lg font-bold">{data.amount_paid}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Operador
                </span>
                <span className="text-lg font-bold">{data.operator}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Nombre del proyecto
                </span>
                <span className="text-lg font-bold">{data.project_name}</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-muted-foreground text-sm font-medium">
                  Observaciones
                </span>
                <span className="text-lg font-bold">{data.observations}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Inicio de conducción
                </span>
                <span className="text-lg font-bold">{data.driving_start}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  Fin de conducción
                </span>
                <span className="text-lg font-bold">{data.driving_end}</span>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalMoreDetail;
