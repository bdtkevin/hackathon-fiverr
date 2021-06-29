import HeaderFree from '../HeaderFree';
import Footer from '../Footer';
import image from './Rectangle.svg';
import './style.scss';

export default function LandingPageFreelance() {
  return (
    <>
      <HeaderFree />
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
        <section
          className='domains'
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <div className='container'>
              <h1>Three domains of activity</h1>
              <div className='gallery'>
                <button className='web'>
                  <img src='/img/LandingPageFreelance/website.png' alt='' />
                  <h2 className='title'>Web</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </button>

                <button className='graphism'>
                  <img src='/img/LandingPageFreelance/graphism.png' alt='' />
                  <h2 className='title'>Graphism</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </button>
                <button className='video'>
                  <img src='/img/LandingPageFreelance/video.png' alt='' />
                  <h2>Video Making</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='create'>
          <div className='textcreate'>
            <h3>Create your own team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Create your team</button>
          </div>
          <img src='/img/LandingPageFreelance/create.png' alt='' />
        </div>
      </div>
      <Footer />
    </>
  );
}
