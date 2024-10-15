export async function getApi() {
  const response = await fetch("https://api.jikan.moe/v4/anime/35849/characters");
  const data = await response.json();
  return data;
}
