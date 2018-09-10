import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

export const songListQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

@graphql(songListQuery)
export default class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSong()}</ul>
        <Link
          to="songs/new"
          className="btn-floating btn-large waves-effect waves-light right red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}
