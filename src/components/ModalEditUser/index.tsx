import React, { useCallback, useEffect, useState } from "react";
import { UserItem } from "../../types";
import { Box, Grid, MenuItem, Modal, TextField } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import ButtonDefault from "../ButtonDefault";
import { validateEmail } from "../../utils/capitalize";

interface ModalEditUserProps {
  openModal: boolean;
  handleClose: () => void;
  data: UserItem;
  mode: string;
}

const RoleItem = [
  { value: "ADMIN", label: "Admin" },
  { value: "USER", label: "Usuario" },
];

const ModalEditUser: React.FC<ModalEditUserProps> = ({
  openModal,
  handleClose,
  data,
  mode,
}) => {
  const [formData, setFormData] = useState({
    username: data.username || "",
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    email: data.email || "",
    role: data.role || "",
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: data.username || "",
      firstname: data.firstname || "",
      lastname: data.lastname || "",
      email: data.email || "",
      role: data.role || "",
    }));
  }, [data]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [emailError, setEmailError] = useState('');


  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

  const handleOpenUpdateModal = () => setOpenModalUpdate(openModal);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
        setEmailError('Por favor ingresa un correo válido.');
      } else {
        setEmailError('');
        console.log('Formulario enviado con éxito:', formData);
      }
    handleClose();
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
            />
            <TextField
              label="Primer Nombre"
              variant="outlined"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              size="small"
            />
            <TextField
              label="Apellido"
              variant="outlined"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              size="small"
            />
            <TextField
              label="Correo"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              fullWidth
              size="small"
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
            >
              {RoleItem.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault
                onClick={handleOpenUpdateModal}
                title={buttonText}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditUser;
