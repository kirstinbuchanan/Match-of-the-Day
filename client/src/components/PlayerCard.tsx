import { FunctionComponent } from 'react';

interface PlayerCardProps {
  position: string;
  squadNumber: number;
  firstName: string;
  lastName: string;
}

const PlayerCard: FunctionComponent<PlayerCardProps> = ({ position, squadNumber, firstName, lastName }) => {
  return (
    <>
      <div>
        {lastName} {firstName} {squadNumber} {position}
      </div>
    </>
  );
};

export default PlayerCard;
