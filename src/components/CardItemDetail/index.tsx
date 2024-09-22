import { Box, Typography } from "@mui/material";
import React from "react";
import { capitalizer } from "../../utils/capitalize";

interface CardItemDetailProps {
  title: string;
  value: string;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({ title, value }) => {
  return (
    <Box sx={{border:"1px #332e81 solid",backgroundColor:"#deebff", borderRadius:1}} className="flex items-center justify-start col-span-1 md:col-span-1 p-2">
    <Typography
        sx={{
            letterSpacing: "0.001px",
            color: "#332e81",
            backgroundColor: "#fff",
            fontSize: "0.85rem",
            padding: "4px 8px",
            borderRadius:1,
        }}
        variant="button"
    >
        &nbsp;{title}:&nbsp;
    </Typography>
    <Typography color="#171b4f" variant="body1"> &nbsp;{capitalizer(value)}</Typography>
</Box>

  );
};

export default CardItemDetail;
