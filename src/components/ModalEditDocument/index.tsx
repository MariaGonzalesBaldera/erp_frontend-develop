import React, { useEffect, useState, useCallback } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { ModalEditDocumentProps } from "../../types";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import DatePickerForm from "../DatePickerForm";
import { useCreateDocument, useUpdateDocument } from "../../hooks/useDocuments";
import {
  DocumentResponse,
  MachineryResponse,
} from "../../domain/machinery.interface";
import { capitalizer } from "../../utils/capitalize";
import { useGetMachineryList } from "../../hooks/useMaquinaria";

const ModalEditDocument: React.FC<ModalEditDocumentProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createDocument = useCreateDocument();
  const updateMutation = useUpdateDocument({
    id:data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number>(0);
  const [loading, setLoading] = useState(false);
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
    heavyMachineryId: 0,
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
    heavyMachineryId: false,
  });
  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = Number(event.target.value);
    formData.heavyMachineryId = selectedValue;
    setSelectedMachinery(selectedValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      heavyMachineryId: false, // Limpia el error si se selecciona una opción válida
    }));
  };

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
        heavyMachineryId: data.heavyMachineryId || 0,
      });
      setSelectedMachinery(data.heavyMachineryId || 0);
    }
  }, [openModal, data]);
  const handleChange = useCallback((name: string, date: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
    if (date !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
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
        heavyMachineryId: mode === "create" && !selectedMachinery,
      };
      setErrors(newErrors);
      const hasErrors = Object.values(newErrors).some((error) => error);
      if (hasErrors) {
        return; // No proceder si hay errores
      }
      setLoading(true);
      try {
        let body;
        if (mode === "create") {
          body = {
            ...formData,
            heavyMachineryId: selectedMachinery, // Usa el valor actualizado de selectedMachinery
          };
          await onCreateDocument(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdateDocument(body);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        handleClose();
      }
    },
    [
      formData,
      mode,
      selectedMachinery,
      useCreateDocument,
      useUpdateDocument,
      handleClose,
    ]
  );
  const onCreateDocument = async (data: DocumentResponse) => {
    try {
      const response = await createDocument.mutateAsync(data);
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
  //recuperacion de maquinarias
  const { data: machineryData, isLoading, error } = useGetMachineryList();
  const [machineryItems, setMachineryItems] = useState<
    { value: number; label: string }[]
  >([]);
  // Actualizar el estado cuando los datos de la API están disponibles
  useEffect(() => {
    if (machineryData && !isLoading && !error) {
      const formattedItems = (machineryData || [])
        .filter(
          (machinery): machinery is MachineryResponse =>
            machinery.id !== undefined
        ) // Filtrar elementos con id definido
        .map((machinery) => ({
          value: machinery.id!,
          label: `${machinery.id} - ${capitalizer(
            machinery.model
          )} - ${capitalizer(machinery.brand)}`,
        }));
      setMachineryItems(formattedItems);
    }
  }, [machineryData, isLoading, error]);

  // Estado para manejar la selección del usuario

  // Manejar el cambio de selección

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
          id={data.id + ""}
          handleClose={handleClose}
        />
        {loading ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <CircularProgress /> {/* Indicador de carga */}
          </Grid>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <div className="bg-background p-6 w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-4">
                {fields.map((field) => (
                  <DatePickerForm
                    key={field.name}
                    dateValue={formData[field.name] || ""}
                    labelValue={field.label}
                    handleDateChange={(date) => handleChange(field.name, date)}
                    nameValue={formData[field.name]}
                    error={errors[field.name]}
                    helperText={errors[field.name] ? "Campo requerido" : ""}
                  />
                ))}
              </div>
              {mode == "create" ? (
                <Grid item xs={12} sm={6} className="pt-4">
                  <div>
                    {isLoading ? (
                      <p>Cargando maquinaria...</p>
                    ) : error ? (
                      <p>Error al cargar la maquinaria</p>
                    ) : (
                      <TextField
                        select
                        size="small"
                        label="Seleccione Maquinaria"
                        value={selectedMachinery}
                        onChange={handleChangeMachinery}
                        name="heavyMachineryId"
                        fullWidth
                        error={errors.heavyMachineryId}
                        helperText={
                          errors.heavyMachineryId ? "Campo requerido" : ""
                        }
                      >
                        {machineryItems.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  </div>
                </Grid>
              ) : (
                ""
              )}
              <Grid container justifyContent="flex-end" spacing={2} mt={2}>
                <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                  <ButtonDefault title={buttonText} />
                </Grid>
              </Grid>
            </div>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalEditDocument;
