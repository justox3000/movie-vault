export default class TheMovieDbApi {
  apiBaseUrl = "https://api.themoviedb.org/3";
  // apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  searchMovies = async (query) => {
    const response = await fetch(
    `${this.apiBaseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`
    );

    return response.json();
  }

  getGenres = async () => {
    const response = await fetch(
    `${this.apiBaseUrl}/genre/movie?api_key=${this.apiKey}`
    );

    return response.json();
  }
}
