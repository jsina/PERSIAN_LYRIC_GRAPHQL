import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const query = gql`
{
  songs {
    title
  }
}
`;

@graphql(query)
export default class SongList extends Component {
  render() {
    console.log(this.props)
    return <div>songList</div>;
  }
}

// const query = gql`
// {
//   songs {
//     title
//   }
// }
// `;

// export default graphql(query)(SongList)
