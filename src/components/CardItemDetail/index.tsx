import { Box, Typography } from "@mui/material";
import React from "react";

interface CardItemDetailProps {
  title: String;
  value: String;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({ title, value }) => {
  return (
    <Box className="flex items-center bg-white justify-start col-span-1 md:col-span-1 border border-gray-300 rounded-sm shadow-md p-2 my-1">
    <Typography
        sx={{
            letterSpacing: "0.001px",
            color: "#332e81", // Cambiado a un color más oscuro
            backgroundColor: "#e0e0e0", // Fondo más claro para contraste
            fontSize: "0.85rem", // Tamaño de fuente ligeramente mayor
            padding: "4px 8px", // Añadido padding
            borderRadius: "4px", // Bordes redondeados para suavizar
            marginRight: "4px" // Añadido margen para separación
        }}
        variant="button"
    >
        &nbsp;{title}:&nbsp;
    </Typography>
    <Typography color="#1e1b4b" variant="body1"> &nbsp;{value}</Typography>
</Box>

  );
};

export default CardItemDetail;
