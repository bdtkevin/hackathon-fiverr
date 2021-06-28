import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Header() {
  return (
    <header>
      <img src='/img/fiverrlogo.png' alt='logo' className='logo' />
      <div className='container'>
        <ul className='team'>
          <li>
            <NavLink to='/create-a-team' className='createTeam'>
              Create a team
            </NavLink>
          </li>
          <li>
            <NavLink to='/join-a-team' className='joinTeam'>
              Join a team
            </NavLink>
          </li>
        </ul>
        <input
          type='text'
          className='searchBar'
          placeholder=' Search your team here...'
        />
        <img src='/img/user-logo.png' alt='userlogo' className='userLogo' />
      </div>
    </header>
  );
}
