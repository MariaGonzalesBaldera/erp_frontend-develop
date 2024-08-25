import React, { useEffect, useState, useCallback } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import { Box, Grid, Modal } from "@mui/material";
import { ModalEditDocumentProps } from "../../types";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";

const ModalEditDocument: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [formData, setFormData] = useState({
    technicalReviewsStart: "",
    technicalReviewsEnd: "",
    soatStart: "",
    soatEnd: "",
    insuranceStart: "",
    insuranceEnd: "",
    trekInsuranceStart: "",
    trekInsuranceEnd: "",
    operatingCertificateStart: "",
    operatingCertificateEnd: "",
  });

  useEffect(() => {
    if (openModal) {
      setFormData({
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
    }
  }, [openModal, data]);

  const handleChange = useCallback(
    (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormData]
  );

  const handleDateChange = useCallback(
    (date) => {
      setFormData((prevData) => ({
        ...prevData,
        maintenance_date: date,
      }));
    },
    [setFormData]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (mode === "create") {
        console.log("Creating record with data:", formData);
        alert("Record created successfully!");
      } else {
        console.log("Updating record with data:", formData);
        alert("Record updated successfully!");
      }
      handleClose(); // Close the modal after operation
    },
    [formData, mode, handleClose]
  );

  const modalTitle =
    mode === "create"
      ? "CREAR NUEVO DOCUMENTO"
      : "EDITAR DETALLE DEL DOCUMENTO";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";

  const fields = [
    { label: "Inicio de revisiones técnicas", name: "technicalReviewsStart" },
    { label: "Fin de revisiones técnicas", name: "technicalReviewsEnd" },
    { label: "Inicio del SOAT", name: "soatStart" },
    { label: "Fin del SOAT", name: "soatEnd" },
    { label: "Inicio del seguro", name: "insuranceStart" },
    { label: "Fin del seguro", name: "insuranceEnd" },
    { label: "Inicio del seguro de trekking", name: "trekInsuranceStart" },
    { label: "Fin del seguro de trekking", name: "trekInsuranceEnd" },
    {
      label: "Inicio del certificado de operaciones",
      name: "operatingCertificateStart",
    },
    {
      label: "Fin del certificado de operaciones",
      name: "operatingCertificateEnd",
    },
  ];

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalInspection}>
        <HeaderModal
          titleHeader={modalTitle}
          id={data.id || ""}
          handleClose={handleClose}
        />
        <Box component="form" onSubmit={handleSubmit}>
          <div className="bg-background p-6 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              {fields.map((field) => (
                <DatePickerForm
                  key={field.name}
                  dateValue={formData[field.name]}
                  labelValue={field.label}
                  handleDateChange={handleChange}
                  nameValue={formData[field.name]}
                />
              ))}
            </div>
            <Grid container justifyContent="flex-end" spacing={2} mt={2}>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <ButtonDefault title={buttonText} />
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditDocument;
