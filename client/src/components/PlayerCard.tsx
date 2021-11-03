import { FunctionComponent } from 'react';
import { Avatar, Box, VStack, Text } from '@chakra-ui/react';

interface PlayerCardProps {
  position: string;
  squadNumber: number;
  firstName: string;
  lastName: string;
}

const PlayerCard: FunctionComponent<PlayerCardProps> = ({ position, squadNumber, firstName, lastName }) => {
  return (
    <>
      <Box w="500px" h="150px" border="1px solid black" borderRadius="md" flexDirection="row">
        <Box>
          <Avatar src="" size="lg" alt={`${firstName} ${lastName}`} />
        </Box>
        <Box>{squadNumber}</Box>
        <VStack>
          <Box>
            <Text>
              <Text as="span" textTransform="capitalize" fontWeight="bold">
                {lastName.toUpperCase()}
              </Text>{' '}
              {firstName}
            </Text>
          </Box>
          <Box>{position}</Box>
        </VStack>
      </Box>
    </>
  );
};

export default PlayerCard;
