const API_TOKEN = '8ba17ee43dbd79e312cd4c9d6d1e182d'

export function getFilmsFromApiWithSearchedText(text, page) {
  //console.log('api page: ', page);
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json()) // putting brackets for response.json() gives an undefined json o_O
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// https://api.themoviedb.org/3/search/movie?api_key=8ba17ee43dbd79e312cd4c9d6d1e182d
