import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.smash.gg/gql/alpha"
  });
  
  ReactDOM.render(
  
    <ApolloProvider client={client}>
      <MyRootComponent />
    </ApolloProvider>,
    document.getElementById('root'),
  );
  