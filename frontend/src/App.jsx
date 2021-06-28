import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Toto from './components/Toto';
import './reset.css';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/toto' component={Toto} />
      </Switch>
    </div>
  );
}
