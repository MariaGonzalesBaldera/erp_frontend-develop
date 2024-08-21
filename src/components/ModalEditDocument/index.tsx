import React, { useEffect, useState } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DocumentItem } from "../../types";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";

interface ModalEditDocumentProps {
  openModal: boolean;
  handleClose: () => void;
  data: DocumentItem;
}

const ModalEditDocument: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
}) => {
  const [formData, setFormData] = useState({
    technicalReviewsStart: data.technicalReviewsStart || "",
    technicalReviewsEnd: data.technicalReviewsEnd || "",
    soatStart: data.soatStart || "",
    soatEnd: data.soatEnd || "",
    insuranceStart: data.insuranceStart || "",
    insuranceEnd: data.insuranceEnd || "",
    trekInsuranceStart: data.trekInsuranceStart || "",
    trekInsuranceEnd: data.trekInsuranceEnd || "",
    operatingCertificateStart: data.operatingCertificateStart || "",
    operatingCertificateEnd: data.operatingCertificateEnd || "",
  });

  useEffect(() => {
    setFormData(data);
  }, [data])
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const handleSubmit = () => {
    //openModal(formData);
  };
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalInspection}>
        <HeaderModal
          titleHeader={"EDITAR DETALLE DEL DOCUMENTO "}
          id={""} //aqui va el id
          handleClose={handleClose}
        />
        <div className="bg-background p-6 w-full max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Inicio de revisiones técnicas"
              variant="outlined"
              type="date"
              name="technicalReviewsStart"
              value={formData.technicalReviewsStart}
              onChange={handleChange}
            />
            <TextField
              label="Fin de revisiones técnicas"
              variant="outlined"
              type="date"
              name="technicalReviewsEnd"
              value={formData.technicalReviewsEnd}
              onChange={handleChange}
            />
            <TextField
              label="Inico del SOAT"
              variant="outlined"
              type="date"
              name="soatStart"
              value={formData.soatStart}
              onChange={handleChange}
            />
            <TextField
              label="Fin del SOAT"
              variant="outlined"
              type="date"
              name="soatEnd"
              value={formData.soatEnd}
              onChange={handleChange}
            />
            <TextField
              label="Inicio del seguro"
              variant="outlined"
              type="date"
              name="insuranceStart"
              value={formData.insuranceStart}
              onChange={handleChange}
            />
            <TextField
              label="Fin del seguro"
              variant="outlined"
              type="date"
              name="insuranceEnd"
              value={formData.insuranceEnd}
              onChange={handleChange}
            />
            <TextField
              label="Trek Insurance Start"
              variant="outlined"
              type="date"
              name="trekInsuranceStart"
              value={formData.trekInsuranceStart}
              onChange={handleChange}
            />
            <TextField
              label="Trek Insurance End"
              variant="outlined"
              type="date"
              name="trekInsuranceEnd"
              value={formData.trekInsuranceEnd}
              onChange={handleChange}
            />
            <TextField
              label="Inicio del certificado de operaciones"
              variant="outlined"
              type="date"
              name="operatingCertificateStart"
              value={formData.operatingCertificateStart}
              onChange={handleChange}
            />
            <TextField
              label="Fin del certificado de operaciones"
              variant="outlined"
              type="date"
              name="operatingCertificateEnd"
              value={formData.operatingCertificateEnd}
              onChange={handleChange}
            />
          </div>
          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault
                onClick={handleOpenUpdateModal}
                title="ACTUALIZAR"
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalEditDocument;
