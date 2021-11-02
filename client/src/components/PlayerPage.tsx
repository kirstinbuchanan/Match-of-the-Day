import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER } from '../graphql/graphql';

interface PlayerPageProps {
  match: any;
}

const PlayerPage: FunctionComponent<PlayerPageProps> = ({ match }) => {
  const {
    params: { id },
  } = match;

  console.log(id);

  const { loading, data, error } = useQuery(GET_PLAYER, {
    variables: {
      findPlayer: id,
    },
  });

  console.log('data', data);

  return <div>Hello world</div>;
};

export default PlayerPage;
