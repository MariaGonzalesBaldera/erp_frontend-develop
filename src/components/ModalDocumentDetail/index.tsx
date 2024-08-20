import React from "react";
import { DocumentItem } from "../../types";
import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import { styleModal } from "../../style/StyleModal";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";

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
            {"DETALLE DEL DOCUMENTO #"} {data.id}
          </Typography>
          <IconButton sx={{ color: "white" }} onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>

        {data && (
          <div className="bg-background p-6 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  technicalReviewsStart
                </span>
                <span className="text-lg font-bold">
                  {data.technicalReviewsStart}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  technicalReviewsEnd
                </span>
                <span className="text-lg font-bold">
                  {data.technicalReviewsEnd}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  soatStart
                </span>
                <span className="text-lg font-bold">{data.soatStart}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  soatEnd
                </span>
                <span className="text-lg font-bold">{data.soatEnd}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  insuranceStart
                </span>
                <span className="text-lg font-bold">{data.insuranceStart}</span>
              </div>
              <div className="flex flex-col col-span-1">
                <span className="text-muted-foreground text-sm font-medium">
                  insuranceEnd
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
                  operatingCertificateStart
                </span>
                <span className="text-lg font-bold">
                  {data.operatingCertificateStart}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm font-medium">
                  operatingCertificateEnd
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
