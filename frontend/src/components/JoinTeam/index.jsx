import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './style.scss'

const JoinTeam = ()=>{
  return(
  <>
  <Header />
    <section className="field">
      <h2>
        Choose your field
      </h2>
      <div className="containerDomain">
        <Link to="/web">
        <button className="web">
          <img src='/img/createTeamImg/webIllu.svg' alt=""/>
          <h3>Web</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p> 
      </button>
      </Link>
      <Link to="/graphism">
      <button className="graphism">
          <img src='/img/createTeamImg/graphismIllu.svg' alt=""/>
          <h3>Graphism</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p> 
      </button>
      </Link>
      <Link to="/video">
      <button className="video">
          <img src='/img/createTeamImg/videoIllu.svg' alt=""/>
          <h3>Video making</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p> 
      </button>
      </Link>
      
    </div>
    </section>

    <section className="listTeam">
      <h2>
        Find your team
      </h2>
      <p className="textTeam">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. 
      </p>
      <div className='gallery'>
        <ul className='cards'>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
          <button>
            <h3>Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididuntut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </button>
        </ul>
      </div>

    </section>
  <Footer />
  </>
  );
}

export default JoinTeam;