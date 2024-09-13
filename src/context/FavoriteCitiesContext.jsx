import { createContext, useContext, useState } from "react";

const initialCities = [
  {
    id: 8012502,
    city: "Socorro",
    country: "Portugal",
    countryCode: "PT",
    date: "8/13/2024",
  },

  {
    id: 2220957,
    city: "Yaoundé",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },

  {
    id: 2232593,
    city: "Douala",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },

  {
    id: 2233410,
    city: "Buea",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },
];

// 1) CREATE A CONTEXT
const FavoriteCitiesContext = createContext();

function FavoriteCitiesProvider({ children }) {
  const [favCities, setFavCities] = useState(initialCities);

  function handleAddFavCity(newCity) {
    setFavCities((cities) =>
      cities.map((city) => city.id).includes(newCity.id)
        ? cities
        : [newCity, ...cities]
    );
  }

  function handleDeleteFavCity(id) {
    setFavCities((favCities) =>
      favCities.filter((favCity) => favCity.id !== id)
    );
  }

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <FavoriteCitiesContext.Provider
      value={{
        favCities,
        onAddFavCity: handleAddFavCity,
        onDeleteFavCity: handleDeleteFavCity,
      }}
    >
      {children}
    </FavoriteCitiesContext.Provider>
  );
}

function useFavoriteCities() {
  const context = useContext(FavoriteCitiesContext);
  if (context === undefined)
    throw new Error(
      "FavoriteCitiesContext was use out of the FavoriteCitiesProvider"
    );
  return context;
}

export { FavoriteCitiesProvider, useFavoriteCities };
