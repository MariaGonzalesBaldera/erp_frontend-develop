import { Box, Grid, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import GroupRadioButton from "../../GroupRadioButton";
import ButtonIconSearch from "../../ButtonIconSearch";
import DatePickerForm from "../../DatePickerForm";
import { GoogleMap, useJsApiLoader, MarkerF, Polyline } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};
//-11.878685838684715, -77.12696870963856
const center = {
  lat: -11.878685838684715,
  lng: -77.12696870963856,
  label: "1",
};

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

const ActualGps: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDnKHdX9gAmZQjGgCefXHxmZwjxRYTFxsw",
  });

  const [map, setMap] = React.useState(null);
  const [showMessage, setShowMessage] = useState<boolean>(true); // Estado para manejar la visibilidad del mensaje
  const [searchResult, setSearchResult] = useState<any>(null); // Estado para manejar los resultados de búsqueda

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const handleSearchClick = () => {
    setShowMessage(false); // Oculta el mensaje cuando se realiza la búsqueda
    setSearchResult({
      details: {
        startTime: "08:00 AM",
        endTime: "05:00 PM",
        kilometers: "120 km",
        hoursWorked: "9 horas",
      },
      points,
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
      <div className="col-span-1 md:col-span-1 border rounded-md border-gray-400 flex items-start justify-start p-2">
        <Grid container justifyItems="center" justifyContent="center">
          <GroupRadioButton showTitle />
          <Grid item xs={12} className="pt-2">
            <DatePickerForm
              key={"filter-day"}
              dateValue={""}
              labelValue="Fecha"
              handleDateChange={() => console.log("first")}
              nameValue="end-day"
            />
          </Grid>
          <Grid item xs={12} className="pt-2">
            <ButtonIconSearch onClick={handleSearchClick} />
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
          <div className="w-full h-full pb-[56.25%] relative">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ height: "400px" }}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                <Polyline
                  key={"AIzaSyDnKHdX9gAmZQjGgCefXHxmZwjxRYTFxsw"}
                  path={points}
                  options={{
                    strokeColor: "#00FF00", // Color verde
                    strokeOpacity: 3,
                    strokeWeight: 3, // Aumentado el grosor para mejor visibilidad
                  }}
                />
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      {/* {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ height: "400px" }}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                {points.map((point, i) => (
                  <MarkerF
                    key={i}
                    position={{ lat: point.lat, lng: point.lng }}
                    label={point.label}
                  />
                ))}
                <></>
              </GoogleMap>
            ) : (
              <></>
            )} */}
    </div>
  );
};

export default ActualGps;
