import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER } from '../graphql/graphql';
import { RouteComponentProps } from 'react-router-dom';

interface RouterProps {
  id: string;
}
interface PlayerPageProps extends RouteComponentProps<RouterProps> {}

const PlayerPage: FunctionComponent<PlayerPageProps> = ({ match }) => {
  const {
    params: { id },
  } = match;

  const { loading, data } = useQuery(GET_PLAYER, {
    variables: {
      findPlayerByIdId: id,
    },
  });

  return (
    <div>
      {data && (
        <>
          <p>{data.findPlayerById.firstname}</p>
          <p>{data.findPlayerById.lastname}</p>
          <p>{data.findPlayerById.position}</p>
          <p>{data.findPlayerById.squadNumber}</p>
          <p>{data.findPlayerById.dateOfBirth}</p>
          <p>{data.findPlayerById.height}</p>
          <p>{data.findPlayerById.nationality}</p>
        </>
      )}
    </div>
  );
};

export default PlayerPage;
