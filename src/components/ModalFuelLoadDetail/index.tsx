import React from "react";
import { FuelLoadProps } from "../../types";
import { Box, Modal } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";

interface ModalFuelLoadDetailProps {
  openModal: boolean;
  handleClose: () => void;
  data: FuelLoadProps;
}

const ModalFuelLoadDetail: React.FC<ModalFuelLoadDetailProps> = ({
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
                  Número de galones:
                </span>
                <span className="text-sm font-bold">{data.numberGallons}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Combustible kilometraje:
                </span>
                <span className="text-sm font-bold">{data.fuelingMileage}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Día de kilometraje:
                </span>
                <span className="text-sm font-bold">{data.fuelingDate}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Cantidad Pagada:
                </span>
                <span className="text-sm font-bold">{data.amountPaid}</span>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                <span className="text-muted-foreground text-sm font-small">
                  Número de factura:
                </span>
                <span className="text-sm font-bold">{data.invoiceNumber}</span>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalFuelLoadDetail;
