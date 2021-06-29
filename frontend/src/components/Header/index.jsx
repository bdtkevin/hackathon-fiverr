import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import './style.scss';

export default function Header() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      {displayModal && <Auth setDisplayModal={setDisplayModal} />}
      <header className='header'>
        <img src='/img/fiverrlogo.png' alt='logo' className='logo' />
        <div className='container'>
          <ul className='team'>
            <li>
              <NavLink to='/create-a-team' className='createTeam'>
                create a team
              </NavLink>
            </li>
            <li>
              <NavLink to='/join-a-team' className='joinTeam'>
                join a team
              </NavLink>
            </li>
          </ul>
          <input
            type='text'
            className='searchBar'
            placeholder=' Search your team here...'
          />
          <button
            className='btn-auth'
            onClick={() => {
              setDisplayModal(true);
            }}
          >
            <img
              src='/img/logo/login.svg'
              alt='userlogo'
              className='userLogo'
            />
          </button>
        </div>
      </header>
    </>
  );
}
