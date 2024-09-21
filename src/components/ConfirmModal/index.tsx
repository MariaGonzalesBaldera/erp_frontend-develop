import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import themeNew from "../../utils/theme";

interface ConfirmModalProps {
  onConfirm: boolean;
  onCancel: () => void;
  onConfirmAction: () => Promise<void>;
  id: number;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onConfirm,
  onCancel,
  onConfirmAction,
  id,
}) => {
  const handleClose = () => {
    if (onCancel) onCancel();
  };
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirmAction();
    } catch (error) {
      console.log("Error al ejecutar la acción: ", error);
    } finally {
      setLoading(false); // Finalizar la carga
      handleClose();
    }
  };

  return (
    <>
      <Modal
        open={onConfirm}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400, md: 500 },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {loading ? (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <CircularProgress /> {/* Indicador de carga */}
            </Grid>
          ) : (
            <>
              <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                gutterBottom
              >
                Mensaje de Confirmación
              </Typography>
              <Typography id="modal-description" sx={{ mb: 3 }}>
                ¿Está seguro(a) que eliminará la maquinaria {id}?
              </Typography>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
                  sx={{
                    border: `1px ${themeNew.palette.primary.main} solid`,
                    color: themeNew.palette.primary.main,
                  }}
                  color="primary"
                  onClick={handleConfirm}
                >
                  Confirmar
                </Button>
                <Button variant="outlined" color="error" onClick={handleClose}>
                  Cancelar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ConfirmModal;
