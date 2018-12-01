import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query, compose, graphql } from "react-apollo";

import songList from "../query/fetchSongs";
import deleteSong from "../mutation/deleteSong";

class SongList extends Component {
  renderSong(songs) {
    return songs.map(({id, title}) => (
      <li key={id} className="collection-item">
        <Link to={`/song/${id}`}>
          {title}
        </Link>
        <a href="#" onClick={() => this.deleteSong(id)} style={deleteIcon}>
          <i className="material-icons">delete</i>
        </a>
      </li>
    ));
  }

  deleteSong = id => {
    this.props
      .deleteSong({
        variables: { id },
        refetchQueries: [
          {
            query: songList
          }
        ]
      })
      .then(({data: { deleteSong }}) => {
        alert(`"${deleteSong.title}" Song has deleted successfully`)
      })
      .catch(err => alert(err));
  };

  render() {
    const {
      loading: songListQueryLoading,
      error: songListQueryError,
      songs
    } = this.props.songListQuery;
    const {
      loading: deleteSongLoading,
      error: deleteSongError
    } = this.props.deleteSong;

    if (songListQueryLoading || deleteSongLoading) return <div>Loading...</div>;
    if (songListQueryError || deleteSongError) return <div>Error :(</div>;
    return (
      <div>
        <ul className="collection">{this.renderSong(songs)}</ul>
        <Link
          to="songs/new/"
          className="btn-floating btn-large waves-effect waves-light right red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default compose(
  graphql(songList, {
    name: "songListQuery"
  }),
  graphql(deleteSong, {
    name: "deleteSong"
  })
)(SongList);

const deleteIcon = {
  float: "right",
  color: "#f00"
};
