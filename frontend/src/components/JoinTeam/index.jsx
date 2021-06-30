<<<<<<< HEAD
import { Link } from 'react-router-dom'
import Header from '../HeaderFree'
import Footer from '../Footer'
import './style.scss'
=======
import { Link } from 'react-router-dom';
import HeaderFree from '../HeaderFree';
import Footer from '../Footer';
import './style.scss';
>>>>>>> a66a6b00570a20904f9c2a8ccc40303f39506c33

const JoinTeam = () => {
  return (
    <>
      <HeaderFree />
      <section className="field">
        <h2 className="choosefield">Choose your field</h2>
        <div className="containerDomain">
          <Link to="/webfree">
            <button className="web">
              <img src="/img/createTeamImg/webIllu.svg" alt="" />
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
          </Link>
          <Link to="/graphismfree">
            <button className="graphism">
              <img src="/img/createTeamImg/graphismIllu.svg" alt="" />
              <h3>Graphism</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
          </Link>
          <Link to="/videomakingfree">
            <button className="video">
              <img src="/img/createTeamImg/videoIllu.svg" alt="" />
              <h3>Video making</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
          </Link>
        </div>
      </section>

      <section className="listTeam">
        <h2 className="findyourteam">Find your team</h2>
        <p className="textTeam">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip
          ex ea commodo consequat.
        </p>
        <div className="gallery">
          <ul className="cards">
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
            <button>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </button>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JoinTeam;
