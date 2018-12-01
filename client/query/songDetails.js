import gql from 'graphql-tag';

export const songDetails =  gql`
    query song($id: ID!) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                likes
                content
            }
        }
    }
`;
