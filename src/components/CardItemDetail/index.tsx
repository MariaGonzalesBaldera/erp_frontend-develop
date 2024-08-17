import { Box, Typography } from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";

interface CardItemDetailProps {
  title: String;
  value: String;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({ title, value }) => {
  return (
    <Box className="flex items-center justify-center col-span-1 md:col-span-1">
        <Box justifyItems={"center"} textAlign={"center"}>
        <Typography
          sx={{
            letterSpacing: "0.001px",
            color: themeNew.palette.surface.main,
            fontSize: "0.8rem",
          }}
          variant="button"
        >
          {title}:
        </Typography>
        <Typography variant="body1">{value}</Typography>
      </Box>
    </Box>
  );
};

export default CardItemDetail;
