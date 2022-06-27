import { RESTDataSource } from 'apollo-datasource-rest'

class SearchAPI extends RESTDataSource {
  constructor(api_key, language) {
    super()
    this.baseURL = 'https://api.themoviedb.org/3/search/'
    this.api_key = api_key
    this.language = language
  }

  movies(
    query,
    page = 1,
    include_adult = false,
    region = 'en-US',
    year,
    primary_release_year
  ) {
    return this.get(`movie`, {
      api_key: this.api_key,
      language: this.language,
      query,
      page,
      include_adult,
      region,
      year,
      primary_release_year
    })
  }
}

export default SearchAPI
