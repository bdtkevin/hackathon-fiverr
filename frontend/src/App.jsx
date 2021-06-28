import { Switch, Route } from 'react-router';
import Toto from './components/Toto';

export default function App() {
  return (
    <div className='App'>
      <p>Hackathon Fiverr</p>
      <Switch>
        <Route path='/toto' component={Toto} />
      </Switch>
    </div>
  );
}
