import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { songDetails } from "../query/songDetails";
import AddLyric from './AddLyric';

export default class SongDetails extends Component {
  lyricsList = lyrics =>(
    lyrics.map(lyric => (
      <tr key={lyric.id}>
        <td>{lyric.content}</td>
        <td>{lyric.likes}</td>
      </tr>
    )));

  render() {
    const id = this.props.match.params.id;
    return (
      <Query query={songDetails} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading...</p>;
					if (error) return <p>{error.toString()}</p>;
          return (
            <div>
              <Link to="/">
                <i className="material-icons">arrow_back</i>
              </Link>
              <h2>{data.song.title}</h2>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Lyric Contents</th>
                    <th>Likes</th>
                  </tr>
                </thead>
                <tbody>{this.lyricsList(data.song.lyrics)}</tbody>
              </table>
              <h5 className="red-text">add lyric</h5>
							<AddLyric songId={id} />
            </div>
          );
        }}
      </Query>
    );
  }
}
