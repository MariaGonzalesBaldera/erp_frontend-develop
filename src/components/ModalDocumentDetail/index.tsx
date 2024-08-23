import React from "react";
import { DocumentItem } from "../../types";
import { Box, Modal } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";

interface ModalDocumentDetailProps {
  openModal: boolean;
  handleClose: () => void;
  data: DocumentItem;
}

const ModalDocumentDetail: React.FC<ModalDocumentDetailProps> = ({
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
          titleHeader={"DETALLE DEL DOCUMENTO"}
          id={""} //aqui va el id
          handleClose={handleClose}
        />
        {data && (
          <div className="bg-background  w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Inicio de revisiones técnicas:
              </span>
              <span className="text-sm font-bold">
                {data.technicalReviewsStart}
              </span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Fin de revisiones técnicas:
              </span>
              <span className="text-sm font-bold">
                {data.technicalReviewsStart}
              </span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Inicio SOAT:
              </span>
              <span className="text-sm font-bold">{data.soatStart}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Fin SOAT:
              </span>
              <span className="text-sm font-bold">{data.soatEnd}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Inicio seguro:
              </span>
              <span className="text-sm font-bold">{data.insuranceStart}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                Fin seguro:
              </span>
              <span className="text-sm font-bold">{data.insuranceEnd}</span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                trekInsuranceStart:
              </span>
              <span className="text-sm font-bold">
                {data.trekInsuranceStart}
              </span>
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
              <span className="text-muted-foreground text-sm font-small">
                trekInsuranceEnd:
              </span>
              <span className="text-sm font-bold">{data.trekInsuranceEnd}</span>
            </div>
          </div>
        </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalDocumentDetail;
