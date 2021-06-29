import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import request from '../../utilities/request.js';
import { useState } from 'react';

const CreateTeam = () => {
  const [category, setCategory] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    const dataToSend = {
      category: category,
      job: job,
    };

    request({ method: 'post', url: '/create-team', data: dataToSend });
    console.log(dataToSend);
  };
};

export default function LandingPageFreelance() {
  return (
    <>
      <Header />
      <div className='LandingPageFree'>
        <section className='find'>
          <img src='/img/LandingPageFreelance/find.png' alt='' />
          <div className='textfind'>
            <h1>Find your team</h1>
            <h2>Work together</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section className='domains wip'>
          <div>
            <svg
              width='1440'
              height='925'
              viewBox='0 0 1440 925'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.499908 386L1439.5 1.20486L1439.5 500.5L0.499999 925L0.499908 386Z'
                fill='#00B22D'
              />
            </svg>
            <div className='container'>
              <h1>Three domains of activity</h1>
              <div className='gallery'>
                <button
                  onClick={() => setCategory('web')}
                  className={
                    category === 'web'
                      ? 'webContainer selected'
                      : 'webContainer'
                  }
                >
                  <h2 className='title'>Web</h2>
                  <img src='/img/LandingPageFreelance/website.png' alt='' />
                </button>

                <button
                  className={
                    category === 'graphism'
                      ? 'graphismContainer selected'
                      : 'graphismContainer'
                  }
                  onClick={() => setCategory('graphism')}
                >
                  <h2 className='title'>Graphism</h2>
                  <img src='/img/LandingPageFreelance/graphism.png' alt='' />
                </button>
                <button
                  className={
                    category === 'video'
                      ? 'videoContainer selected'
                      : 'videoContainer'
                  }
                  onClick={() => setCategory('video')}
                >
                  <h2>Web</h2>
                  <img src='/img/LandingPageFreelance/video.png' alt='' />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='create'>
          <div className='container'>
            <div className='textcreate'>
              <h3>Create your own team</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src='/img/LandingPageFreelance/create.png' alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
