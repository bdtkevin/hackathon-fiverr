import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header';
import Toto from './components/Toto';
import './reset.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <User.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route path='/toto' component={Toto} />
        </Switch>
      </User.Provider>
    </div>
  );
}
