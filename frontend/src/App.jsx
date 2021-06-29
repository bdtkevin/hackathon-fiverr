import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPageFreelance from './components/LandingPageFreelance';
import LandingPageClient from './components/LandingPageClient';
import User from './contexts/User';
import CreateTeam from './components/CreateTeam';
import JoinTeam from './components/JoinTeam';
import WebClient from './components/WebClient';
import GraphismClient from './components/GraphismClient';
import VideoMakingClient from './components/VideoMakingClient';
import WebFree from './components/WebFree';
import GraphismFree from './components/GraphismFree';
import VideoMakingFree from './components/VideoMakingFree';
import './reset.css';
import './style.scss';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/landingclient" component={LandingPageClient} />
          <Route path="/createteam" component={CreateTeam} />
          <Route path="/jointeam" component={JoinTeam} />
          <Route path="/webclient" component={WebClient} />
          <Route path="/landingfreelance" component={LandingPageFreelance} />
          <Route path="/graphismclient" component={GraphismClient} />
          <Route path="/videomakingclient" component={VideoMakingClient} />
          <Route path="/webfree" component={WebFree} />
          <Route path="/graphismfree" component={GraphismFree} />
          <Route path="/videomakingfree" component={VideoMakingFree} />
        </Switch>
      </User.Provider>
    </div>
  );
}
