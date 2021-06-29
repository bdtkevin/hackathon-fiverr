import { Switch, Route } from 'react-router-dom';
import CreateTeam from './components/CreateTeam';
import WebClient from './components/WebClient';
import Toto from './components/Toto';
import './reset.css';
import JoinTeam from './components/JoinTeam';

export default function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/toto' component={Toto} />
        <Route path='/create-team' component={CreateTeam} />
        <Route path='/webclient' component={WebClient} />
        <Route path='/join-team' component={JoinTeam} />
      </Switch>
    </div>
  );
}
