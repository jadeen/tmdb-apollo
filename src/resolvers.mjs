export default {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    movie: (_, { id }, { dataSources }) => {
      return dataSources.movieAPI.getMovie(id)
    },
    searchMovies: (
      _,
      { query, page, include_adult, region, year, primary_release_year },
      { dataSources }
    ) => {
      return dataSources.searchAPI.movies(
        query,
        page,
        include_adult,
        region,
        year,
        primary_release_year
      )
    }
  },
  Movie: {
    videos: async ({ id }, _, { dataSources }) => {
      return await dataSources.movieAPI.getVideos(id)
    },
    watchProvider: async ({ id }, info, { dataSources }) => {
      return await dataSources.movieAPI.getWatchProviders(id, info.country)
    }
  }
}
