export default class TheMovieDbApi {
  apiBaseUrl = "https://api.themoviedb.org/3";
  apiKey = process.env.REACT_APP_API_KEY;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  searchMovies = async (query) => {
    const response = await fetch(
    `${this.apiBaseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
    );

    return response.json();
  }

  getGenres = async () => {
    const response = await fetch(
    `${this.apiBaseUrl}/genre/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );

    return response.json();
  }
}
