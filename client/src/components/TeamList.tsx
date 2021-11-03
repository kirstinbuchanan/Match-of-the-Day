import { FunctionComponent, useState } from 'react';
import PlayerCard from './PlayerCard';
import { Link } from 'react-router-dom';
import { Heading, Select, VStack } from '@chakra-ui/react';

interface TeamListProps {
  team: any;
  teamType: string;
}

const TeamList: FunctionComponent<TeamListProps> = ({ team, teamType }) => {
  const [selectedOption, setSelectedOption] = useState('lastName');

  const data = team.firstEleven;

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (selectedOption) {
      data.sort((a: any, b: any) => {
        let playerA = a.selectedOption.toUpperCase();
        let playerB = b.selectedOption.toUpperCase();
        if (playerA < playerB) {
          return -1;
        }
        if (playerA > playerB) {
          return 1;
        }

        return 0;
      });
    }
  };

  return (
    <>
      <VStack border="1px solid pink">
        <Heading size="xl">{teamType}</Heading>
        <Select placeholder="Sort by...">
          <option value="lastName">Last Name</option>
          <option value="position">Position</option>
          <option value="squadNumber">Squad Number</option>
        </Select>
        {team.firstEleven.map((player: any) => (
          <Link key={player.id} to={`/${player.id}`}>
            <PlayerCard
              key={player.id}
              position={player.position}
              lastName={player.lastname}
              firstName={player.firstname}
              squadNumber={player.squadNumber}
            />
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default TeamList;
