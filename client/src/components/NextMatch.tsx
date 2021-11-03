import { FunctionComponent } from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import Moment from 'react-moment';
interface Props {
  date: string;
  home: string;
  away: string;
  stadium: string;
}

const NextMatch: FunctionComponent<Props> = ({ date, home, away, stadium }) => {
  return (
    <Box
      h="250px"
      w="100vw"
      borderRadius="md"
      border="1px black solid"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Match of the Day!</Heading>
      <Text>
        <Moment format="hh:mm a - MMMM Do, YYYY">{date}</Moment>
      </Text>
      <Box>
        {home} VS {away}
      </Box>

      <Box>{stadium}</Box>
    </Box>
  );
};

export default NextMatch;
