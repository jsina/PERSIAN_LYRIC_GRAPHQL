import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

@graphql(mutation)
export default class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onSubmit(event){
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title,
      }
    });
  };

  render() {
    return (
      <div>
        <h3>Create a Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song title</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
