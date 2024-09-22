import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface ReusableSnackbarProps {
  open: boolean;
  message: string;
  severity: any;
  duration?: number;
  onClose: () => void;
}
const ReusableSnackbar: React.FC<ReusableSnackbarProps> = ({
  open,
  message,
  severity,
  duration,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration || 3500}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity || "info"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ReusableSnackbar;
