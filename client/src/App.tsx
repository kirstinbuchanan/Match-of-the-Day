import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlayerPage from './components/PlayerPage';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={PlayerPage} />
      </Router>
    </>
  );
}

export default App;
