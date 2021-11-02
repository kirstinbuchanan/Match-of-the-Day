import { FunctionComponent, useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import { Link } from 'react-router-dom';

interface TeamListProps {
  team: any;
  teamType: string;
}
const TeamList: FunctionComponent<TeamListProps> = ({ team, teamType }) => {
  return (
    <>
      <div>{teamType}</div>
      <select>
        <option value="lastName">Last Name</option>
        <option value="position">Position</option>
        <option value="squadNumber">Squad Number</option>
      </select>
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
    </>
  );
};

export default TeamList;
