const API_TOKEN = '8ba17ee43dbd79e312cd4c9d6d1e182d'

export function getFilmsFromApiWithSearchedText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
  .then((response) => response.json()) // putting brackets for response.json() gives an undefined json o_O
  .catch((error) => console.error(error))
}
