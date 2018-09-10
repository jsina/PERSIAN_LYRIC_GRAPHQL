import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from "./component/App";

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
