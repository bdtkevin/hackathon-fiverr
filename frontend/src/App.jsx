import { Switch, Route } from 'react-router-dom';
import CreateTeam from './components/CreateTeam';

import Toto from './components/Toto';
import './reset.css';

export default function App() {
  return (
    <div className='App'>

      <Switch>
        <Route path='/toto' component={Toto} />
        <Route path='/create-team' component={CreateTeam} />
      </Switch>
    </div>
  );
}
