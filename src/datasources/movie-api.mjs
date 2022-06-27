import { RESTDataSource } from 'apollo-datasource-rest'

class MovieAPI extends RESTDataSource {
  constructor(api_key, language) {
    super()
    this.baseURL = 'https://api.themoviedb.org/3/movie/'
    this.api_key = api_key
    this.language = language
  }

  getMovie(id) {
    return this.get(`${id}`, {
      api_key: this.api_key,
      language: this.language
    })
  }

  async getVideos(movie_id) {
    const response = await this.get(`${movie_id}/videos`, {
      api_key: this.api_key,
      language: this.language
    })

    return response.results
  }

  async getWatchProviders(movie_id, country = 'FR') {
    const response = await this.get(`${movie_id}/watch/providers`, {
      api_key: this.api_key,
      language: this.language
    })

    return response.results[country]
  }
}

export default MovieAPI
