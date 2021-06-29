import { Switch, Route } from 'react-router-dom';
import Toto from './components/Toto';
import LandingPageFreelance from './components/LandingPageFreelance';
import './reset.css';

export default function App() {
  return (
    <div className='App'>
      <p>Hackathon Fiverr</p>
      <Switch>
        <Route path='/toto' component={Toto} />
        <Route path='/Freelance' component={LandingPageFreelance} />
      </Switch>
    </div>
  );
}
