import { FunctionComponent } from 'react';

interface Props {
  date: string;
  home: string;
  away: string;
}

const NextMatch: FunctionComponent<Props> = ({ date, home, away }) => {
  return (
    <div>
      {date} {home} {away}
    </div>
  );
};

export default NextMatch;
