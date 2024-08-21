import React from "react";
import { DocumentItem } from "../../types";
import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
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
          <div className="bg-background p-6 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Inicio de revisiones técnicas
                </span>
                <span className="text-lg font-bold">
                  {data.technicalReviewsStart}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Fin de revisiones técnicas
                </span>
                <span className="text-lg font-bold">
                  {data.technicalReviewsEnd}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Inico del SOAT
                </span>
                <span className="text-lg font-bold">{data.soatStart}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Fin del SOAT
                </span>
                <span className="text-lg font-bold">{data.soatEnd}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Inicio del seguro
                </span>
                <span className="text-lg font-bold">{data.insuranceStart}</span>
              </div>
              <div className="flex flex-col col-span-1">
                <span className="text-muted-foreground text-sm font-medium">
                Fin del seguro
                </span>
                <span className="text-lg font-bold">{data.insuranceEnd}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  trekInsuranceStart
                </span>
                <span className="text-lg font-bold">
                  {data.trekInsuranceStart}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  trekInsuranceEnd
                </span>
                <span className="text-lg font-bold">
                  {data.trekInsuranceEnd}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Inicio del certificado de operaciones
                </span>
                <span className="text-lg font-bold">
                  {data.operatingCertificateStart}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                Inicio del certificado de operaciones
                </span>
                <span className="text-lg font-bold">
                  {data.operatingCertificateEnd}
                </span>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalDocumentDetail;
