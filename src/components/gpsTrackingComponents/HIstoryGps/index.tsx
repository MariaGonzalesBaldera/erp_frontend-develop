import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DatePickerForm from "../../DatePickerForm";
import GroupRadioButton from "../../GroupRadioButton";
import ButtonIconSearch from "../../ButtonIconSearch";

const HistoryGps: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
      <div className="col-span-1 md:col-span-1 border flex items-start justify-start p-2">
        <Grid container justifyItems="center" justifyContent="center">
          <GroupRadioButton showTitle />
          <Box className="pt-2 pb-2">
            <ButtonIconSearch />
          </Box>
          <Grid item xs={12}>
            <DatePickerForm
              key={"filter-day"}
              dateValue={""}
              labelValue="Fecha"
              handleDateChange={() => console.log("first")}
              nameValue="end-day"
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{ backgroundColor: "#e2e0ff", color: "#1e1b4b" }}
              className="border border-gray-300 p-4 rounded-md mt-2"
            >
               <Typography variant="h6" gutterBottom>
                Detalles de la Operación
              </Typography>
              <Typography>
                <strong>Hora de Inicio: </strong>08:00 AM
              </Typography>
              <Typography>
                <strong>Hora Final: </strong>05:00 PM
              </Typography>
              <Typography>
                <strong>Kilómetros Recorridos: </strong>120 km
              </Typography>
              <Typography>
                <strong>Horas Trabajadas: </strong>9 horas
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="col-span-1 md:col-span-2 border flex items-center justify-start p-0">
        <div className="w-full h-full pb-[56.25%] relative">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15617.55636141443!2d-77.1370109!3d-11.87797195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1725071318483!5m2!1ses-419!2spe"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HistoryGps;
