import React, { useState,useEffect }  from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
} from "@react-google-maps/api";

const GoogleMapPolyline = () => {
  const [path, setPath] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDnKHdX9gAmZQjGgCefXHxmZwjxRYTFxsw",
  });

  useEffect(() => {
    const localData = localStorage.getItem("googleMapPolyline");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setPath(parsedData);
    }
  }, []);
  const flightPlanCoordinates = [
    { lat: -11.878685838684715, lng: -77.12696870963856 },
    { lat: -11.882381541347911, lng: -77.12632497952517 },
    { lat: -11.884859280404177, lng: -77.12645372555548 },
    { lat: -11.88966699365415, lng: -77.12585909858042 },
  ];
  const addPointToPath = (e) => {
    try {
      const latLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      const mergedData = [...path, latLng];
      setPath(mergedData);
      localStorage.setItem("googleMapPolyline", JSON.stringify(mergedData));
    } catch (error) {
      console.error("addPointToPath error", error);
    }
  };

  const removeItem = (index) => {
    const arr = [...path];
    arr.splice(index, 1);
    setPath(arr);
    localStorage.setItem("googleMapPolyline", JSON.stringify(arr));
  };

  return isLoaded ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1200,
        }}
      >
        <div style={{ width: "57%" }}>
          <GoogleMap
            onClick={addPointToPath}
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={{ lat: -11.878685838684715, lng: -77.12696870963856 }} 
            zoom={14}
          >
            {/* =====Polyline===== */}
            <Polyline
              path={flightPlanCoordinates}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
            />

            {/* =====Marker===== */}
              {/* <Marker position={flightPlanCoordinates[0]} />
              <Marker position={flightPlanCoordinates[3]} /> */}
          </GoogleMap>
        </div>
        {/* <div style={{ width: "39%" }}>
          {path.map((item, i) => (
            <p key={i}>
              <button onClick={() => removeItem(i)}>X</button>{" "}
              {JSON.stringify(item)}
            </p>
          ))}
        </div> */}
      </div>
    </>
  ) : (
    <></>
  );
};

export default GoogleMapPolyline;