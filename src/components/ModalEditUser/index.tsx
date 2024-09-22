import React, { useCallback, useEffect, useState } from "react";
import { UserItem, UserRequest } from "../../types";
import { Box, Button, Grid, MenuItem, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import ButtonDefault from "../ButtonDefault";
import { validateEmail } from "../../utils/capitalize";
import { useCreateUser, useUpdateUser } from "../../hooks/useAuthentication";
import ChangePassword from "../ChangePassword";
interface ModalEditUserProps {
  openModal: boolean;
  handleClose: () => void;
  data: UserItem;
  mode: string;
  onChangePassword?: () => void;
}

const RoleItem = [
  { value: "ADMINISTRATOR", label: "Admin" },
  { value: "USER", label: "Usuario" },
];

const ModalEditUser: React.FC<ModalEditUserProps> = ({
  openModal,
  handleClose,
  data,
  mode,
  onChangePassword
}) => {
  const createUser = useCreateUser();
  const [openChangeModal, setOpenChangeModal] = useState(false);
  const handleCloseChangeModal = () => {
    setOpenChangeModal(false);
  };
  const updateMutation = useUpdateUser({
    id: Number(data.id),
  });
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    firstname: false,
    lastname: false,
    email: false,
    role: false,
    password: false,
  });

  useEffect(() => {
    if (openModal && data) {
      setFormData({
        username: data.username || "",
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        email: data.email || "",
        role: data.role || "",
        password: data.role || "",
      });
    }
  }, [openModal, data]);

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
  const [emailError, setEmailError] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newErrors = {
        username: formData.username === "",
        firstname: formData.firstname === "",
        lastname: formData.lastname === "",
        email: formData.email === "" || !validateEmail(formData.email), // Valida si el email es correcto
        role: formData.role === "",
        password: mode === "create" && formData.password === "", // El password es obligatorio solo al crear
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error);
      if (hasErrors) {
        return; // No proceder si hay errores
      }

      const body = {
        userDTO: {
          username: formData.username,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          role: formData.role,
        },
        password: formData.password,
      };

      if (mode === "create") {
        onCreateUser(body);
      } else {
        onUpdateUser(body.userDTO); // Solo se envían los datos del usuario al actualizar
      }
      handleClose();
    },
    [formData, mode, useCreateUser, useUpdateUser, handleClose]
  );
  const handleOpenChangePass = () => {
    setOpenChangeModal(true);
    handleClose();
  };
  const onCreateUser = async (data: UserRequest) => {
    try {
      const response = await createUser.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const onUpdateUser = async (data: UserItem) => {
    try {
      const response = await updateMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.log("Error-> " + error);
    }
  };
  const modalTitle =
    mode === "create" ? "CREAR USUARIO" : "EDITAR DETALLE DE LA USUARIO";

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
          id={""} //aqui va el id
          handleClose={handleClose}
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          className="bg-background p-6 w-full max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campos de texto */}
            <TextField
              label="Usuario"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.username}
              helperText={errors.username ? "Campo requerido" : ""}
            />
            <TextField
              label="Primer Nombre"
              variant="outlined"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.firstname}
              helperText={errors.firstname ? "Campo requerido" : ""}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.lastname}
              helperText={errors.lastname ? "Campo requerido" : ""}
            />
            <TextField
              label="Correo"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.email}
              helperText={errors.email ? "Ingrese un correo válido" : ""}
            />
            <TextField
              size="small"
              id="outlined-select-currency"
              label="Rol"
              select
              variant="outlined"
              fullWidth
              name="role"
              value={formData.role}
              onChange={handleChange}
              error={errors.role}
              helperText={errors.role ? "Campo requerido" : ""}
            >
              {RoleItem.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {mode == "create" ? (
              <TextField
                label="Contraseña"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                size="small"
                error={errors.password}
                helperText={errors.password ? "Campo requerido" : ""}
              />
            ) : (
              <Button
                onClick={onChangePassword}
                sx={{ border: "1px gray solid" }}
              >
                Cambiar clave
              </Button>
            )}
          </div>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault title={buttonText} />
            </Grid>
          </Grid>
        </Box>

       
      </Box>
    </Modal>
  );
};

export default ModalEditUser;
