import { Grid, Typography } from "@mui/material";
import React from "react";
import ButtonDefault from "../ButtonDefault";
import { HeaderPageProps } from "../../types";

const HeaderPage: React.FC<HeaderPageProps> = ({ title, titleButton, handleOpen }) => {
  return (
    <Grid container className="pb-2" alignItems="center">
      <Grid item xs={10} sm={10} md={9.8}>
        <Typography variant="button">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <ButtonDefault onClick={handleOpen} title={titleButton} />
      </Grid>
    </Grid>
  );
};

export default HeaderPage;
