export async function getApi() {
  const response = await fetch("https://api.jikan.moe/v4/anime/42205/characters");
  const data = await response.json();
  return data;
}
