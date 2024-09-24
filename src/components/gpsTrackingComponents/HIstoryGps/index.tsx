import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePickerForm from "../../DatePickerForm";
import GroupRadioButton from "../../GroupRadioButton";
import ButtonIconSearch from "../../ButtonIconSearch";
import { capitalizer } from "../../../utils/capitalize";
import { MachineryResponse } from "../../../domain/machinery.interface";
import { useGetMachineryList } from "../../../hooks/useMaquinaria";
import ButtonDefault from "../../ButtonDefault";
import GoogleMapPolyline from "../ActualGps/maps";

const points = [
  {
    lat: -11.878685838684715,
    lng: -77.12696870963856,
    label: "1",
  },
  {
    lat: -11.880746615595351,
    lng: -77.12653101166552,
    label: "2",
  },
  {
    lat: -11.88182051092688,
    lng: -77.126470879839,
    label: "3",
  },
  {
    lat: -11.883497544480617,
    lng: -77.12611008887987,
    label: "4",
  },
  {
    lat: -11.885365806539411,
    lng: -77.1260198911401,
    label: "5",
  },
];
const HistoryGps: React.FC = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyDnKHdX9gAmZQjGgCefXHxmZwjxRYTFxsw",
  // });
  const [selectedMachinery, setSelectedMachinery] = useState<number | "">("");
  const [showMessage, setShowMessage] = useState<boolean>(true); // Estado para manejar la visibilidad del mensaje
  const [searchResult, setSearchResult] = useState<any>(null); // Estado para manejar los resultados de búsqueda

  const handleSearchClick = () => {
    setShowMessage(false); // Oculta el mensaje cuando se realiza la búsqueda
    setSearchResult({
      details: {
        startTime: "08:00 AM",
        endTime: "05:00 PM",
        kilometers: "120 km",
        hoursWorked: "3 horas",
      },
      points,
    });
  };
  const someCoords = [
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];
  const flightPlanCoordinates = [
    { lat: -11.878685838684715, lng: -77.12696870963856 },
    { lat: -11.882381541347911, lng: -77.12632497952517 },
    { lat: -11.884859280404177, lng: -77.12645372555548 },
    { lat: -11.88966699365415, lng: -77.12585909858042 },
  ];
  //recuperacion de maquinarias
  const { data: machineryData, isLoading, error } = useGetMachineryList();
  const [machineryItems, setMachineryItems] = useState<
    { value: number; label: string }[]
  >([]);
  useEffect(() => {
    if (machineryData && !isLoading && !error) {
      const formattedItems = (machineryData || [])
        .filter(
          (machinery): machinery is MachineryResponse =>
            machinery.id !== undefined
        ) // Filtrar elementos con id definido
        .map((machinery) => ({
          value: machinery.id!,
          label: `${machinery.id} - ${capitalizer(
            machinery.model
          )} - ${capitalizer(machinery.brand)}`,
        }));
      setMachineryItems(formattedItems);
    }
  }, [machineryData, isLoading, error]);

  const handleChangeMachinery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedMachinery(Number(event.target.value));
  };
  return (
    <Box>
      <Typography variant="button">{"BUSQUEDA DE UNA MAQUINARIA POR GPS POR FECHA"}</Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto mt-2">
        <div className="col-span-1 md:col-span-1 border rounded-md border-gray-400 flex items-start justify-start p-2">
          <Grid container justifyItems="center" justifyContent="center">
            <Box
              className="mt-2 mb-3"
              sx={{ textAlign: "center", color: "#1e1b4b" }}
            >
              <Typography variant="button">
                {"SELECCIONE MAQUINARIA PARA VER SU RUTA"}
              </Typography>
            </Box>
            <Grid item xs={12} className="pt-2 pb-2">
              <TextField
                select
                size="small"
                label="Seleccione Maquinaria"
                value={selectedMachinery}
                onChange={handleChangeMachinery}
                name="heavyMachineryId"
                fullWidth
              >
                {machineryItems.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>{" "}
            </Grid>
            <Grid item xs={12}>
              <DatePickerForm
                key={"filter-day"}
                dateValue={""}
                labelValue="Fecha"
                handleDateChange={() => console.log("first")}
                nameValue="end-day"
              />
            </Grid>
            <Grid item xs={12} className="pt-2">
              <ButtonDefault title="Buscar" onClick={handleSearchClick} />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{ backgroundColor: "#e2e0ff", color: "#1e1b4b" }}
                className="border border-gray-300 p-4 rounded-md mt-2"
              >
                <Typography variant="h6" gutterBottom>
                  Detalles de la Operación
                </Typography>
                {showMessage ? (
                  <Typography>
                    Realice una búsqueda haciendo clic en el ícono de la lupa.
                  </Typography>
                ) : (
                  searchResult && (
                    <>
                      <Typography>
                        <strong>Hora de Inicio: </strong>
                        {searchResult.details.startTime}
                      </Typography>
                      <Typography>
                        <strong>Hora Final: </strong>
                        {searchResult.details.endTime}
                      </Typography>
                      <Typography>
                        <strong>Kilómetros Recorridos: </strong>
                        {searchResult.details.kilometers}
                      </Typography>
                      <Typography>
                        <strong>Horas Trabajadas: </strong>
                        {searchResult.details.hoursWorked}
                      </Typography>
                    </>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="col-span-1 md:col-span-2 border flex items-center justify-start p-0">
          {showMessage ? (
            <Box> </Box>
          ) : (
            <div className="card">
              <GoogleMapPolyline />
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

export default HistoryGps;
