import React, { useCallback, useEffect, useState } from "react";
import {
  MachineryIncomeResponse,
  MachineryResponse,
} from "../../domain/machinery.interface";
import { capitalizer } from "../../utils/capitalize";
import { useGetMachineryList } from "../../hooks/useMaquinaria";
import { useCreateIncome, useUpdateIncome } from "../../hooks/useIncome";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import HeaderModal from "../HeaderModal";
import { styleModalInspection } from "../../style/StyleModal";
import ButtonDefault from "../ButtonDefault";
import DatePickerForm from "../DatePickerForm";
interface ModalIcomeEditProps {
  openModal: boolean;
  handleClose: () => void;
  data: MachineryIncomeResponse;
  mode: string;
}

const ModalIcomeEdit: React.FC<ModalIcomeEditProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const createFuelingUp = useCreateIncome();
  const updateMutation = useUpdateIncome({
    id: data.id,
  });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    transactionDate: "",
    hoursOperated: 0,
    hourlyRate: 0,
    totalIncome: 0,
    invoiceNumber: "",
    projectName: "",
    heavyMachineryId: 0,
  });
  const [errors, setErrors] = useState({
    transactionDate: false,
    hoursOperated: false,
    hourlyRate: false,
    totalIncome: false,
    invoiceNumber: false,
    projectName: false,
    heavyMachineryId: false,
  });
  useEffect(() => {
    if (openModal && data) {
      setFormData({
        transactionDate: data.transactionDate || "",
        hoursOperated: data.hoursOperated || 0,
        hourlyRate: data.hourlyRate || 0,
        totalIncome: data.totalIncome || 0,
        invoiceNumber: data.invoiceNumber || "",
        projectName: data.projectName || "",
        heavyMachineryId: data.heavyMachineryId || 0,
      });
    }
  }, [openModal, data]);
  const handleDateChange = useCallback((date) => {
    setFormData((prevData) => ({
      ...prevData,
      transactionDate: date,
    }));

    if (date !== null) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        transactionDate: false,
      }));
    }
  }, []);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value !== "") {
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
        transactionDate: formData.transactionDate === "",
        hoursOperated: formData.hoursOperated === 0,
        hourlyRate: formData.hourlyRate === 0,
        totalIncome: formData.totalIncome === 0,
        invoiceNumber: formData.invoiceNumber === "",
        projectName: formData.projectName === "",
        heavyMachineryId: mode === "create" && !selectedMachinery,
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some(
        (error) => error === true
      );
      if (hasErrors) {
        return; // Si hay errores, no proceder
      }

      setLoading(true); // Iniciar la carga
      try {
        let body;
        if (mode === "create") {
          body = {
            ...formData,
            heavyMachineryId: selectedMachinery, // Usa el valor actualizado de selectedMachinery
          };
          await onCreateIncome(body);
        } else {
          body = {
            ...formData,
            heavyMachineryId: formData.heavyMachineryId,
          };
          await onUpdateIncome(body);
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
      useCreateIncome,
      useUpdateIncome,
      handleClose,
    ]
  );

  const onCreateIncome = async (data: MachineryIncomeResponse) => {
    try {
      const response = await createFuelingUp.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateIncome = async (data: MachineryIncomeResponse) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };

  const modalTitle =
    mode === "create" ? "REGISTRAR INGRESO" : "ACTUALIZAR INGRESO - CÓDIGO ";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";

  //recuperacion de maquinarias
  const { data: machineryData, isLoading, error } = useGetMachineryList(); // Llamar a la API
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
  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedMachinery(Number(event.target.value));
    errors.heavyMachineryId = false;
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
          titleHeader={modalTitle}
          id={data.id || ""} // Display the ID if available
          handleClose={handleClose}
        />
        <Box className="p-5">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {loading ? (
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CircularProgress /> {/* Indicador de carga */}
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <DatePickerForm
                    dateValue={formData.transactionDate}
                    labelValue="Fecha de Transacción"
                    handleDateChange={handleDateChange}
                    nameValue="fuelingDate"
                    error={errors.transactionDate}
                    helperText={errors.transactionDate ? "Campo requerido" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Horas Operadas"
                    name="hoursOperated"
                    type="number"
                    value={formData.hoursOperated}
                    onChange={handleChange}
                    error={errors.hoursOperated}
                    helperText={errors.hoursOperated ? "Campo requerido" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Tarifa por hora"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    error={errors.hourlyRate}
                    helperText={errors.hourlyRate ? "Campo requerido" : ""}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Ingreso total"
                    name="totalIncome"
                    type="number"
                    value={formData.totalIncome}
                    onChange={handleChange}
                    error={errors.totalIncome}
                    helperText={errors.totalIncome ? "Campo requerido" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Número de Factura"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    error={errors.invoiceNumber}
                    helperText={errors.invoiceNumber ? "Campo requerido" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Nombre del proyecto"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    error={errors.projectName}
                    helperText={errors.projectName ? "Campo requerido" : ""}
                  />
                </Grid>
                {mode == "create" ? (
                  <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                  <ButtonDefault title={buttonText} />
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalIcomeEdit;
