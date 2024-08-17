import { Box, Typography } from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";
import CheckIcon from "@mui/icons-material/Check";

interface CardItemDetailProps {
  title: String;
  value: String;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({title,value}) => {
  return (
    <Box
      justifyItems={"center"}
      textAlign={"center"}
      className=" p-0.2"
    >
      <Typography
        sx={{
          letterSpacing: "0.001px",
          color: themeNew.palette.surface.main,
          fontSize:"0.8rem"
        }}
        variant="button"
      > {title}:
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default CardItemDetail;
