import { Box, Typography } from "@mui/material";
import React from "react";

interface CardItemDetailProps {
  title: String;
  value: String;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({ title, value }) => {
  return (
    <Box className="flex items-center justify-start col-span-1 md:col-span-1 ">
        <Typography
          sx={{
            letterSpacing: "0.001px",
            color: "#332e81",
            fontSize: "0.8rem",
            paddingRight:".5rem"
          }}
          variant="button"
        >
          {title}:
        </Typography>
        <Typography color="#1e1b4b" variant="body1">{value}</Typography>
    </Box>
  );
};

export default CardItemDetail;
