import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permissão para acessar a localização foi negada");
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        const { latitude, longitude } = currentLocation.coords;

        if (latitude < -90 || latitude > 90) {
          throw new Error("Latitude fora do intervalo válido.");
        }

        if (longitude < -180 || longitude > 180) {
          throw new Error("Longitude fora do intervalo válido.");
        }

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setLocation({ latitude, longitude });
      } catch (error) {
        setErrorMsg("Erro ao obter a localização: " + error.message);
      }
    })();
  }, []);
  

  return { location, errorMsg };
};

export default useLocation;
