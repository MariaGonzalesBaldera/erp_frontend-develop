import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography } from "@mui/material";

const StatTableInfo: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%",
          sm: "90%",
          md: "70%",
          lg: "40rem",
          xl: "100%",
        },
        minWidth: {
          xs: "300px",
          sm: "350px",
        },
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Typography color={"white"} variant="h6" component="div" gutterBottom>
        Uso de Maquinaria
      </Typography>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            color:'#6031a5',
            data: [14, 17, 13, 11, 12, 8, 20, 9, 10, 12, 9, 12],
          },
        ]}
        sx={{ borderRadius: 1, backgroundColor: "white" }}
        height={340}
      />
    </Box>
  );
};

export default StatTableInfo;
