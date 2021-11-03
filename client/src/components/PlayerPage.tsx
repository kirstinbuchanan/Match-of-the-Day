import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER } from '../graphql/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Avatar, Box, Center, Text, IconButton } from '@chakra-ui/react';
import Moment from 'react-moment';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
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

  if (loading) return null;

  return (
    <>
      <Link to="/">
        <IconButton m="4" size="lg" aria-label="Go Back" icon={<ChevronLeftIcon />} />
      </Link>
      <Center w="100vw" h="100vh">
        {data && (
          <Box w="700px" h="500px" border="1px solid black" borderRadius="md" boxShadow="2xl">
            <Avatar src="" />
            <Text>Name: {`${data.findPlayerById.firstname} ${data.findPlayerById.lastname}`}</Text>
            <Text>Position: {data.findPlayerById.position}</Text>
            <Text>Number: {data.findPlayerById.squadNumber}</Text>
            <Text>
              Date of Birth: <Moment format="DD-MM-YYYY">{data.findPlayerById.dateOfBirth}</Moment>
            </Text>
            <Text>Height: {data.findPlayerById.height} cm</Text>
            <Text>Nationality: {data.findPlayerById.nationality}</Text>
          </Box>
        )}
      </Center>
    </>
  );
};

export default PlayerPage;
