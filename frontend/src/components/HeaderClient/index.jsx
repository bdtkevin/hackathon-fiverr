import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from '../Auth';
import './style.scss';

export default function HeaderClient() {
  const [displayModal, setDisplayModal] = useState(false);

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
              <NavLink to="/webclient" className="web">
                web
              </NavLink>
            </li>
            <li>
              <NavLink to="/graphismclient" className="graphism">
                graphism
              </NavLink>
            </li>
            <li>
              <NavLink to="/videomakingclient" className="videoMaking">
                video making
              </NavLink>
            </li>
          </ul>
          <input
            type="text"
            className="searchBar"
            placeholder=" Search your team here..."
          />
          <button
            className="btn-auth"
            onClick={() => {
              setDisplayModal(true);
            }}
          >
            <img
              src="/img/logo/login.svg"
              alt="userlogo"
              className="userLogo"
            />
          </button>
        </div>
      </header>
    </>
  );
}
