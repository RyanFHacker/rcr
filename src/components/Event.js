//dislplay a single event
import React from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import Loading from './Loading';
import SomeList from './SomeList'

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
 
const Event = () => (
  <Query query={GET_TOURNAMENT} variables={ {
            eventId:563107,
            page: 1,
            perPage: 50
        }}>
        {({ data, loading }) => {
            

    //   console.log(data.event)
      if (loading || !data.event) {
        return <Loading />;
      }
      const { event } = data;
      return <SomeList event={event} />
    }}
  </Query>
);
 
export default Event;