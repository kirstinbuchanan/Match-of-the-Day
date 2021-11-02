import { gql } from '@apollo/client';

export const GET_MATCH = gql`
  query NextMatch {
    nextMatch {
      id
      date
      home {
        name
        stadium
        firstEleven {
          id
          firstname
          lastname
          position
          squadNumber
        }
      }
      away {
        name
        stadium
        firstEleven {
          id
          lastname
          firstname
          position
          squadNumber
        }
      }
    }
  }
`;

export const GET_PLAYER = gql`
  query findPlayer($findPlayerId: String) {
    findPlayer(id: $findPlayerId) {
      firstname
      lastname
      height
      dateOfBirth
      position
      squadNumber
      nationality
    }
  }
`;
