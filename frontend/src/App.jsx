import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header';
import CreateTeam from './components/CreateTeam';
import WebClient from './components/WebClient';
import GraphismClient from './components/GraphismClient';
import VideoMakingClient from './components/VideoMakingClient';
import './reset.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <User.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route path='/create-team' component={CreateTeam} />
          <Route path='/webclient' component={WebClient} />
          <Route path='/graphismclient' component={GraphismClient} />
          <Route path='/videomakingclient' component={VideoMakingClient} />
        </Switch>
      </User.Provider>
    </div>
  );
}
