import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Make sure the query is also exported -- not just the component
export const GET_DOG_QUERY = gql`
  query getDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

export const Dog = ( props ) => (
  <Query query={GET_DOG_QUERY} variables={{ name: props.name }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error!`;
      console.log(data);
      return (
        <p>
          {data.dog.name} is a {data.dog.breed}
        </p>
      );
    }}
  </Query>
);