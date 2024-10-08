import React, { useCallback, useEffect, useState } from "react";
import { employeeItem } from "../../types";
import { useCreateEmployee, useUpdateEmployee } from "../../hooks/useEmployee";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import ButtonDefault from "../ButtonDefault";
import HeaderModal from "../HeaderModal";
import { styleModalInspection } from "../../style/StyleModal";
import DatePickerForm from "../DatePickerForm";
import { formatDateForAPI } from "../../utils/capitalize";
interface ModalRrhhEditProps {
  openModal: boolean;
  handleClose: () => void;
  data: employeeItem;
  mode: string;
}
const documentTypeItem = [
  { value: "DNI", label: "DNI" },
  { value: "RUC", label: "RUC" },
  { value: "pasaporte", label: "Pasaporte" },
  { value: "CarnetDeExtranjeria", label: "Carnet de extranjeria" },
];

const ModalRrhhEdit: React.FC<ModalRrhhEditProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [loading, setLoading] = useState(false);

  const createUser = useCreateEmployee();
  const updateMutation = useUpdateEmployee({
    id: Number(data.id),
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    age: 0,
    documentType: "",
    documentNumber: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    startDate: "",
    position: "",
    attendance: "",
    salary: 0,
    overtimeHours: 0,
    performance: 0,
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    documentType: false,
    documentNumber: false,
    phoneNumber: false,
    email: false,
    dateOfBirth: false,
    startDate: false,
    position: false,
    attendance: false,
  });

  useEffect(() => {
    if (openModal && data) {
      setFormData({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        address: data.address || "",
        age: data.age || 0,
        documentType: data.documentType || "",
        documentNumber: data.documentNumber || "",
        phoneNumber: data.phoneNumber || "",
        email: data.email || "",
        dateOfBirth: data.dateOfBirth || "",
        startDate: data.startDate || "",
        position: data.position || "",
        attendance: data.attendance || "",
        salary: data.salary || 0,
        overtimeHours: data.overtimeHours || 0,
        performance: data.performance || 0,
      });
    }
  }, [openModal, data]);
  const handleDateChange = useCallback((name: string, date: string) => {
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
    (e) => {
      e.preventDefault();

      // Validar campos obligatorios
      const requiredFields = [
        "firstName",
        "lastName",
        "address",
        "documentType",
        "documentNumber",
        "phoneNumber",
        "email",
        "dateOfBirth",
        "startDate",
        "position",
      ];

      // Crear un objeto para almacenar errores
      let newErrors = {};
      let hasErrors = false;

      requiredFields.forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = true;
          hasErrors = true;
        }
      });

      setErrors((prevErrors) => ({
        ...prevErrors,
        ...newErrors,
      }));
      if (hasErrors) {
        return;
      }
      setLoading(true);
      try {
        const employeeData: employeeItem = {
          ...formData,
          attendance: formData.attendance || undefined,
          salary: formData.salary || undefined,
          overtimeHours: formData.overtimeHours || undefined,
          performance: formData.performance || undefined,
        };
        if (mode === "create") {
          onCreateUser(employeeData);
        }
        if (mode === "update") {
          onUpdateUser(employeeData);
        }
      } catch (error) {
        console.error("Error");
      } finally {
        setLoading(false);
        handleClose();
      }
    },
    [formData, mode, useCreateEmployee, useUpdateEmployee, handleClose]
  );

  const onCreateUser = async (data: employeeItem) => {
    try {
      const response = await createUser.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateUser = async (data: employeeItem) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const modalTitle =
    mode === "create" ? "REGISTAR TRABAJADOR" : "EDITAR TRABAJADOR - CÓDIGO ";

  const buttonText = mode === "create" ? "GUARDAR" : "ACTUALIZAR";

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
          id={data.id ||""} //aqui va el id
          handleClose={handleClose}
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          className="bg-background p-6 w-full max-w-6xl mx-auto"
        >
          {loading ? (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <CircularProgress /> {/* Indicador de carga */}
            </Grid>
          ) : (
            <>
              <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Campos de texto */}
                <TextField
                  label="Primer Nombre"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.firstName}
                  helperText={errors.firstName ? "Campo requerido" : ""}
                />
                <TextField
                  label="Apellido"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.lastName}
                  helperText={errors.lastName ? "Campo requerido" : ""}
                />
                <TextField
                  label="Dirección"
                  variant="outlined"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.address}
                  helperText={errors.address ? "Campo requerido" : ""}
                />
                <TextField
                  size="small"
                  id="outlined-select-currency"
                  label="Tipo de documento"
                  select
                  variant="outlined"
                  fullWidth
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                  error={errors.documentType}
                  helperText={
                    errors.documentType ? "Este campo es requerido" : ""
                  }
                >
                  {documentTypeItem.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Número de Documento"
                  variant="outlined"
                  type="number"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.documentNumber}
                  helperText={errors.documentNumber ? "Campo requerido" : ""}
                />
                <TextField
                  label="Número de Teléfono"
                  variant="outlined"
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.phoneNumber}
                  helperText={errors.phoneNumber ? "Campo requerido" : ""}
                />
                <TextField
                  label="Correo Electrónico"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.email}
                  helperText={errors.email ? "Ingrese un correo válido" : ""}
                />
                <DatePickerForm
                  dateValue={formData.dateOfBirth}
                  labelValue="Fecha de Nacimiento"
                  handleDateChange={(date) =>
                    handleDateChange("dateOfBirth", formatDateForAPI(date))
                  }
                  nameValue={"dateOfBirth"}
                  error={errors.dateOfBirth}
                  helperText={
                    errors.dateOfBirth ? "Este campo es requerido" : ""
                  }
                />
                <DatePickerForm
                  dateValue={formData.startDate}
                  labelValue="Fecha de inicio de trabajo"
                  handleDateChange={(date) =>
                    handleDateChange("startDate", formatDateForAPI(date))
                  }
                  nameValue={"startDate"}
                  error={errors.startDate}
                  helperText={errors.startDate ? "Este campo es requerido" : ""}
                />
                <TextField
                  label="Posición"
                  variant="outlined"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.position}
                  helperText={errors.position ? "Campo requerido" : ""}
                />
                <TextField
                  label="Asistencia"
                  variant="outlined"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={errors.attendance}
                  helperText={errors.attendance ? "Campo requerido" : ""}
                />
                <TextField
                  label="Salario"
                  variant="outlined"
                  name="salary"
                  type="number"
                  value={formData.salary}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Horas Extra"
                  variant="outlined"
                  name="overtimeHours"
                  type="number"
                  value={formData.overtimeHours}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Rendimiento"
                  variant="outlined"
                  name="performance"
                  type="number"
                  value={formData.performance}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Box>

              <Grid container justifyContent="flex-end" spacing={2} mt={2}>
                <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                  <ButtonDefault title={buttonText} />
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalRrhhEdit;
