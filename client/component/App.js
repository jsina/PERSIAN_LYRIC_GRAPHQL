import React, { Component } from "react";
import { Switch, Route } from "react-router";

import Header from "./Header";
import SongList from "./SongList";
import CreateSong from "./CreateSong";
import SongDetails from "./SongDetails";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={SongList} />
            <Route exact path="/songs/new" component={CreateSong} />
            <Route exact path="/song/:id" component={SongDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}
