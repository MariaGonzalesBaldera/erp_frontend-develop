import { Box, Typography } from "@mui/material";
import React from "react";
import { capitalizer } from "../../utils/capitalize";

interface CardItemDetailProps {
  title: string;
  value: string;
}

const CardItemDetail: React.FC<CardItemDetailProps> = ({ title, value }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Box sx={{backgroundColor:"#312d6c", borderRadius:1}} className="flex items-center justify-start col-span-1 md:col-span-1 p-2">
=======
    <Box sx={{border:"1px #332e81 solid",backgroundColor:"#deebff", borderRadius:1}} className="flex items-center justify-start col-span-1 md:col-span-1 p-2">
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
    <Box sx={{border:"1px #332e81 solid",backgroundColor:"#deebff", borderRadius:1}} className="flex items-center justify-start col-span-1 md:col-span-1 p-2">
>>>>>>> feature/addAuthProcess
    <Typography
        sx={{
            letterSpacing: "0.001px",
            color: "#332e81",
            backgroundColor: "#fff",
            fontSize: "0.85rem",
            padding: "4px 8px",
            borderRadius:1,
<<<<<<< HEAD
<<<<<<< HEAD
          border:"1px #1e1b4b solid",
=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
        }}
        variant="button"
    >
        &nbsp;{title}:&nbsp;
    </Typography>
<<<<<<< HEAD
<<<<<<< HEAD
    <Typography color="white" variant="body1"> &nbsp;{capitalizer(value)}</Typography>
=======
    <Typography color="#171b4f" variant="body1"> &nbsp;{capitalizer(value)}</Typography>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
    <Typography color="#171b4f" variant="body1"> &nbsp;{capitalizer(value)}</Typography>
>>>>>>> feature/addAuthProcess
</Box>

  );
};

export default CardItemDetail;
