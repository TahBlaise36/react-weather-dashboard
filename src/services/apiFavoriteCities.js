import supabase from "./supabase";

export async function getFavoriteCities() {
  const { data: favoriteCities, error } = await supabase
    .from("favorite_cities")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error("Cities could not be loaded");
  }

  // console.log(favoriteCities);

  return favoriteCities;
}

export async function addFavoriteCity(city) {
  const { data: session } = await supabase.auth.getSession();
  const userId = session.session.user.id;

  if (!userId) return null;

  // Check if the city already exists for this user
  const { data: existingCity, error: checkError } = await supabase
    .from("favorite_cities")
    .select("city_id")
    .eq("city_id", city.city_id)
    .eq("user_id", userId)
    .single();

  if (checkError && checkError.code !== "PGRST116") {
    console.log(checkError);
    throw new Error("Error checking if city exists");
  }

  if (existingCity) {
    console.log("City is already in the list");
    return null;
  }

  // Proceed with the insert if the city is not already in the list
  const { data, error } = await supabase
    .from("favorite_cities")
    .insert([
      {
        city_id: city.city_id,
        city: city.city,
        country: city.country,
        countryCode: city.countryCode,
        date: city.date,
        user_id: userId,
      },
    ])
    .select();

  // console.log(userId);

  if (error) {
    console.log(error);
    throw new Error("City could not be added");
  }

  return data;
}

export async function deleteFavoriteCity(id) {
  const { data, error } = await supabase
    .from("favorite_cities")
    .delete()
    .eq("city_id", id);

  if (error) {
    console.log(error);
    throw new Error("City could not be deleted");
  }

  return data;
}
