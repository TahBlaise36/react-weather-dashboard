import { createContext, useContext, useState } from "react";
import { useWeather } from "../hooks/useWeather";

// 1) CREATE A CONTEXT
const CityContext = createContext();

function CityProvider({ children }) {
  const [city, setCity] = useState("");
  const { weatherData, error, isLoading } = useWeather(city);

  return (
    // 2) PROVIDE VALUE O CHILD COMPONENTS
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
  if (context === undefined)
    throw new Error("CityContext was use out of the CityProvider");
  return context;
}

export { CityProvider, useCity };
