import { Switch, Route } from 'react-router-dom';
import CreateTeam from './components/CreateTeam';
import WebClient from './components/WebClient';
import GraphismClient from './components/GraphismClient';
import VideoMakingClient from './components/VideoMakingClient';
import WebFree from './components/WebFree';
import GraphismFree from './components/GraphismFree';
import VideoMakingFree from './components/VideoMakingFree';
import './reset.css';

export default function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/create-team' component={CreateTeam} />
        <Route path='/webclient' component={WebClient} />
        <Route path='/graphismclient' component={GraphismClient} />
        <Route path='/videomakingclient' component={VideoMakingClient} />
        <Route path='/webfree' component={WebFree} />
        <Route path='/graphismfree' component={GraphismFree} />
        <Route path='/videomakingfree' component={VideoMakingFree} />
      </Switch>
    </div>
  );
}
