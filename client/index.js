import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from './component/App';
import SongList from './component/SongList';
import CreateSong from './component/CreateSong';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="/song/new" component={CreateSong}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
