import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

export const songListQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default class SongList extends Component {
  renderSong(songs) {
    return songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    return (
      <Query query={songListQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return (
            <div>
              <ul className="collection">{this.renderSong(data.songs)}</ul>
              <Link
                to="songs/new/"
                className="btn-floating btn-large waves-effect waves-light right red"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
          );
        }}
      </Query>
    );
  }
}
