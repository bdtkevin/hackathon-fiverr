import { useContext, useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import User from '../../contexts/User';
import Auth from '../Auth';
import './style.scss';

export default function HeaderFree() {
  const history = useHistory();
  const [displayModal, setDisplayModal] = useState(false);
  const { user } = useContext(User);

  return (
    <>
      {displayModal && <Auth setDisplayModal={setDisplayModal} />}
      <header className="header">
        <Link to="/">
          <img src="/img/fiverrlogo.png" alt="logo" className="logo" />
        </Link>
        <div className="container">
          <ul className="team">
            <li>
              <NavLink to="/createteam" className="createTeam">
                create a team
              </NavLink>
            </li>
            <li>
              <NavLink to="/jointeam" className="joinTeam">
                join a team
              </NavLink>
            </li>
          </ul>
          <button
            className={`btn-auth ${!user ? 'logout' : 'login'}`}
            onClick={() => {
              if (!user) {
                setDisplayModal(true);
              } else {
                history.push('/profil/freelance');
              }
            }}
          >
            <p className="pseudo">{!user ? 'Log in' : user.display_name}</p>
            <svg className="userLogo" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
