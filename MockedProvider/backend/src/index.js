const { GraphQLServer, MockList } = require ('graphql-yoga')

const typeDefs = `
  type Query {
    tasks: [Tasks]
    dog(name: String): Dog
  }

  type Dog {
    id: ID
    name: String
    breed: String
  }

  type Tasks {
    id: ID
    task: String
  }

`

let dog = {
  id: '1',
  name: 'Buck',
  breed: 'bulldog'
}

const mocks = {
  Query: () => ({
    tasks: () => new MockList([10,10]),
    dog: () => dog,
  }),

}

const server = new GraphQLServer({ typeDefs, resolvers: () => true, mocks })
server.start(() => console.log(`Server is running at http://localhost:4000`))
