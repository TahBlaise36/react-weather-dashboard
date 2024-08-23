import { createContext, useContext, useState } from "react";
import { useWeather } from "../hooks/useWeather";

// 1) CREATE A CONTEXT
const CityContext = createContext();

function CityProvider({ children }) {
  const [city, setCity] = useState("");
  const { weatherData, error, isLoading } = useWeather(city);

  return (
    <CityContext.Provider
      value={{
        city,
        error,
        isLoading,
        weatherData,
        onSetCity: setCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  return context;
}

export { CityProvider, useCity };
