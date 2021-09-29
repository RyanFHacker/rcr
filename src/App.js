import React, { Component } from 'react';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
import Routes from './routes';
import 'dotenv/config';
 
const client = new ApolloClient({
  uri: 'https://api.smash.gg/gql/alpha',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.REACT_APP_SMASHGG_PERSONAL_ACCESS_TOKEN
        }`,
      },
    });
  },
});

const GET_TOURNAMENT= gql`
query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
  event(id: $eventId) {
    id
    name
    sets(
      page: $page
      perPage: $perPage
      sortType: STANDARD
    ) {
      pageInfo {
        total
      }
      nodes {
        id
        slots {
          id
                standing {
        id
        placement
        stats {
          score {
            label
            value
          }
        }
      }
          entrant {
            id
            name
          }
        }
      }
    }
  }
},
`;

client
.query({
  query: GET_TOURNAMENT,
  variables: {
    eventId:563107,
    page: 1,
    perPage: 50
  },
})
.then(console.log);
class App extends Component {

  render() {
    
    return (
      <div>
        <Routes />
      </div>

      
    );
  }
}
 
export default App;