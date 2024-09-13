import React, { useEffect, useState, useCallback } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import { Box, Grid, Modal } from "@mui/material";
import { ModalEditDocumentProps } from "../../types";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import { useCreateDocument, useUpdateDocument } from "../../hooks/useDocuments";
import { DocumentResponse } from "../../domain/machinery.interface";
import { formatDateForAPI } from "../../utils/capitalize";

const ModalEditDocument: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createDocument = useCreateDocument();

  const updateMutation = useUpdateDocument({
    id: Number(data.id),
  });

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
    heavyMachineryId:""
  });
  const [errors, setErrors] = useState({
    technicalReviewsStart: false,
    technicalReviewsEnd: false,
    soatStart: false,
    soatEnd: false,
    insuranceStart: false,
    insuranceEnd: false,
    trekInsuranceStart: false,
    trekInsuranceEnd: false,
    operatingCertificateStart: false,
    operatingCertificateEnd: false,
  });
  useEffect(() => {
    if (openModal && data) {
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
        heavyMachineryId: data.heavyMachineryId || ""
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

  const handleDateChange = useCallback((name: string, date: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      console.log("heavyMachineryId",formData.heavyMachineryId)
      e.preventDefault();
      const newErrors = {
        technicalReviewsStart: formData.technicalReviewsStart === "",
        technicalReviewsEnd: formData.technicalReviewsEnd === "",
        soatStart: formData.soatStart === "",
        soatEnd: formData.soatEnd === "",
        insuranceStart: formData.insuranceStart === "",
        insuranceEnd: formData.insuranceEnd === "",
        trekInsuranceStart: formData.trekInsuranceStart === "",
        trekInsuranceEnd: formData.trekInsuranceEnd === "",
        operatingCertificateStart: formData.operatingCertificateStart === "",
        operatingCertificateEnd: formData.operatingCertificateEnd === "",
        
      };
      setErrors(newErrors);
      const hasErrors = Object.values(newErrors).some((error) => error);
      if (hasErrors) {
        return; // No proceder si hay errores
      }
      let body = {
        technicalReviewsStart: formatDateForAPI(formData.technicalReviewsStart),
        technicalReviewsEnd: formatDateForAPI(formData.technicalReviewsEnd),
        soatStart: formatDateForAPI(formData.soatStart),
        soatEnd: formatDateForAPI(formData.soatEnd),
        insuranceStart: formatDateForAPI(formData.insuranceStart),
        insuranceEnd: formatDateForAPI(formData.insuranceEnd),
        trekInsuranceStart: formatDateForAPI(formData.trekInsuranceStart),
        trekInsuranceEnd: formatDateForAPI(formData.trekInsuranceEnd),
        operatingCertificateStart: formatDateForAPI(
          formData.operatingCertificateStart
        ),
        operatingCertificateEnd: formatDateForAPI(
          formData.operatingCertificateEnd
        ),
        heavyMachineryId:formData.heavyMachineryId
      };

      if (mode === "create") {
        onCreateDocument(body);
      } else {
        console.log("update",body.heavyMachineryId)
        onUpdateDocument(body);
      }
      handleClose();
    },
    [formData, mode, useCreateDocument, handleClose]
  );
  const onCreateDocument = async (data: DocumentResponse) => {
    try {
      const response = await createDocument.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };

  const onUpdateDocument = async (data: DocumentResponse) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
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
                  dateValue={formData[field.name] || ""}
                  labelValue={field.label}
                  handleDateChange={(date) => handleDateChange(field.name, date)}
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
