import React, { Component } from "react";
import { Mutation } from "react-apollo";

import likeLyric from "../mutation/likeLyric";
import songDetails from "../query/songDetails";
export default class LyricList extends Component {
  submitHandler = (event, likeLyric, id) => {
    console.log(likeLyric, id, event);
    event.preventDefault();
    likeLyric({
      variables: {
        id: id
      },
    //   refetchQueries: [
    //     {
    //       query: songDetails
    //     }
    //   ]
    }).catch((err) => console.log(err));
  };
  render() {
    const { lyrics } = this.props;
    return (
      <Mutation mutation={likeLyric}>
        {(likeLyric, { loading, error }) => (
          <div>
            <table className="striped">
              <thead>
                <tr>
                  <th>Lyric Contents</th>
                  <th>Likes</th>
                </tr>
              </thead>
              <tbody>
                {lyrics.map(lyric => (
                  <tr key={lyric.id}>
                    <td>{lyric.content}</td>
                    <td>{lyric.likes}</td>
                    <td>
                      <a
                        href="#"
                        onClick={event =>
                          this.submitHandler(event, likeLyric, lyric.id)
                        }
                        style={style}
                      >
                        <i className="material-icons">thumb_up</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && <p>loading ...</p>}
            {error && <p className="red-text">Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    );
  }
}

const style = {
  float: "right"
};
