"use strict";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

import { songListQuery } from "./SongList";

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event, cb) {
    event.preventDefault();
    cb({
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
      <Mutation mutation={mutation}>
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
