import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";

interface HeaderModalProps {
  titleHeader: string;
  id: string;
  handleClose: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({
  titleHeader,
  id = "",
  handleClose,
}) => {
  return (
    <Grid
      container
      className="pl-5"
      sx={{
        width: "100%",
        textAlign: "end",
        height: "2.5rem",
        backgroundColor: themeNew.palette.primary.main,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{ color: "white" }}
        id="modal-modal-title"
        variant="button"
        component="h2"
      >
        {titleHeader} {id}
      </Typography>
      <IconButton sx={{ color: "white" }} onClick={handleClose}>
        <Close />
      </IconButton>
    </Grid>
  );
};

export default HeaderModal;
