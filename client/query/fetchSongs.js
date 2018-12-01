import gql from 'graphql-tag';

export const songList =  gql`
    query {
        songs {
            id
            title
        }
    }
`;
