import { FunctionComponent } from 'react';
import NextMatch from './NextMatch';
import { GET_MATCH } from '../graphql/graphql';
import TeamList from './TeamList';
import { useQuery } from '@apollo/client';
import { HStack } from '@chakra-ui/react';

const HomePage: FunctionComponent = () => {
  const { loading, data } = useQuery(GET_MATCH);

  if (loading) return null;

  console.log('data', data.nextMatch);
  return (
    <div>
      <div>
        <NextMatch date={data.nextMatch.date} home={data.nextMatch.home.name} stadium={data.nextMatch.home.stadium} away={data.nextMatch.away.name} />
        <HStack w="100vw" justify="space-around">
          <TeamList team={data.nextMatch.home} teamType="Home" />
          <TeamList team={data.nextMatch.away} teamType="Away" />
        </HStack>
      </div>
    </div>
  );
};

export default HomePage;
