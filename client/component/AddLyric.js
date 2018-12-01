import React, { Component } from "react";
import { Mutation } from "react-apollo";

import addLyricToSong from "../mutation/addLyricToSong";
import { songDetails } from "../query/songDetails";

export default class AddLyric extends Component {
  state = {
    content: ""
  };

  onChange = event => this.setState({ content: event.target.value });

  handleSubmit = (event, addLyric) => {
    event.preventDefault();
    const { songId } = this.props;
    addLyric({
      variables: {
        content: this.state.content,
        songId: songId
      },
      refetchQueries: [
        {
          query: songDetails,
          variables: {
            id: songId
          }
        }
      ]
    }).then(
      () => this.setState({ content: "" })
    ).catch(
      err => this.setState({ content: "" })
    );
  };

  render() {
    return (
      <Mutation mutation={addLyricToSong}>
        {(addLyric, { loading, error }) => (
          <div>
            <form onSubmit={event => this.handleSubmit(event, addLyric)}>
              <input onChange={this.onChange} value={this.state.content} />
              <button className="btn" type="submit" name="action">
                Submit
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="red-text">Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    );
  }
}
