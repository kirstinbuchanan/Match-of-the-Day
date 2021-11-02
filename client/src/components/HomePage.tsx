import { FunctionComponent } from 'react';
import NextMatch from './NextMatch';
import { GET_MATCH } from '../graphql/graphql';
import TeamList from './TeamList';
import { useQuery } from '@apollo/client';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const { loading, data } = useQuery(GET_MATCH);

  if (loading) return null;

  console.log('data', data.nextMatch);
  return (
    <div>
      <div>
        <NextMatch date={data.nextMatch.date} home={data.nextMatch.home.name} away={data.nextMatch.away.name} />
        <TeamList team={data.nextMatch.home} teamType="Home" />
        <TeamList team={data.nextMatch.away} teamType="Away" />
      </div>
    </div>
  );
};

export default HomePage;
