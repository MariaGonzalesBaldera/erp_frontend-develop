import { Box, Grid, Modal, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";
import ButtonDefault from "../ButtonDefault";
import { useChangePassword } from "../../hooks/useAuthentication";
import { NewPasswordRequest } from "../../types";
import ReusableSnackbar from "../ReusableSnackbar";

interface ChangePasswordProps {
  openModal: boolean;
  handleClose: () => void;
  id: number;
  handleSwitchModal?: ()=>void
}

const ChangePassword: React.FC<ChangePasswordProps> = ({
  openModal,
  handleClose,
  id,
}) => {
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const modalTitle = "CAMBIAR CONTRASEÑA";

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const { mutate } = useChangePassword({
    id: id,
    currentPassword: formData.currentPassword,
    newPassword: formData.newPassword,
  });
  const [errors, setErrors] = useState({
    currentPassword: false,
    newPassword: false,
  });
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
      const newErrors = {
        currentPassword: formData.currentPassword === "",
        newPassword: formData.newPassword === "",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error);
      if (hasErrors) {
        return; // No proceder si hay errores
      }
      const data = {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      };

      onChangePass(data);
      //handleClose();
    },
    [formData, handleClose]
  );
  const onChangePass = async (data: NewPasswordRequest) => {
    try {
      console.log(data)
      mutate(data, {
        onSuccess: (response) => {
          console.log("Contraseña cambiada exitosamente", response);
        },
        onError: (error) => {
            setError(error.message);
            setOpenSnackbar(true);
        },
      });
    } catch (error) {
      console.log("Error-> " + JSON.stringify(error.message));
    }
  };
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  useEffect(() => {
    if (openModal) {
      setFormData({
        currentPassword: '',
        newPassword: '',
      });
      setErrors({
        currentPassword: false,
        newPassword: false,
      });
    }
  }, [openModal]);
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
              label="Ingrese contraseña anterior"
              variant="outlined"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.currentPassword}
              helperText={errors.currentPassword ? "Campo requerido" : ""}
            />
            <TextField
              label="Ingrese nueva contraseña"
              variant="outlined"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              fullWidth
              size="small"
              error={errors.newPassword}
              helperText={errors.newPassword ? "Campo requerido" : ""}
            />
          </div>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              <ButtonDefault title={"CAMBIAR CLAVE"} />
            </Grid>
          </Grid>
        </Box>
        <ReusableSnackbar
        severity={"error"}
        message={error}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
      />
      </Box>
    </Modal>
  );
};

export default ChangePassword;
