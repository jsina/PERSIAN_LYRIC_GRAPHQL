"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

import songListQuery from '../query/fetchSongs';
import addSong from '../mutation/addSong';

export default class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event, addSong) {
    event.preventDefault();
    addSong({
      variables: {
        title: this.state.title
      },
      refetchQueries: [
        {
          query: songListQuery
        }
      ]
    }).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <Mutation mutation={addSong}>
        {addSong => (
          <div>
            <Link to="/">
              <i className="material-icons">arrow_back</i>
            </Link>
            <h3>Create a Song</h3>
            <form
              onSubmit={e => this.onSubmit(e, addSong)}
            >
              <label>Song title</label>
              <input
                onChange={event => this.setState({ title: event.target.value })}
                value={this.state.title}
              />
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
