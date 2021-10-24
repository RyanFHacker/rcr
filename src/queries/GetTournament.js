
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

export default GET_TOURNAMENT