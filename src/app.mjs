import { ApolloServer } from 'apollo-server'

import typeDefs from './schema.mjs'
import resolvers from './resolvers.mjs'

import MovieAPI from './datasources/movie-api.mjs'
import SearchAPI from './datasources/search-api.mjs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieAPI: new MovieAPI('cbb0cd6e9ffc96b93927a29961c9421c', 'en-US'),
    searchAPI: new SearchAPI('cbb0cd6e9ffc96b93927a29961c9421c', 'en-US')
  })
})

server.listen({ port: 4001 }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4001
    📭  Query at https://studio.apollographql.com/dev
  `)
})
