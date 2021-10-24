import React, { Component } from 'react';
import 'cross-fetch/polyfill';
// import ApolloClient from 'apollo-boost';
import Routes from './routes';
import 'dotenv/config';

// const client = new ApolloClient({
//   uri: 'https://api.smash.gg/gql/alpha',
//   request: operation => {
//     operation.setContext({
//       headers: {
//         authorization: `Bearer ${
//           process.env.REACT_APP_SMASHGG_PERSONAL_ACCESS_TOKEN
//         }`,
//       },
//     });
//   },
// });

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