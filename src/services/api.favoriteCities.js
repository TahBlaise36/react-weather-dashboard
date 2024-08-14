import supabase from "./supabase";

export async function getFavoriteCities() {
  const { data: favoriteCities, error } = await supabase
    .from("favoriteCities")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error("Cities cound not be loaded");
  }

  return favoriteCities;
}

export async function addFavoriteCity(city) {
  const { data, error } = await supabase
    .from("favoriteCities")
    .insert([city])
    .select();

  if (error) {
    console.log(error);
    throw new Error("City could not be added");
  }

  return data;
}

export async function deleteFavoriteCity(id) {
  const { data, error } = await supabase
    .from("favoriteCities")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("City could not be deleted");
  }

  return data;
}
