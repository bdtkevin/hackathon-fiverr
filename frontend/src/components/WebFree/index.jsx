import HeaderFree from '../HeaderFree';
import Footer from '../Footer';
import './style.scss';

export default function WebFree() {
  return (
    <>
      <HeaderFree />
      <div className='webFree'>
        <div className='description'>
          <img
            src='/img/webclientdraw.png'
            alt='webFreeDraw'
            className='webFreeDraw'
          />
          <div className='paragraph'>
            <h2>Web</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi
            </p>
          </div>
        </div>
        <div className='findyourteam'>
          <h2>Find Your Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='gallery'>
          <ul className='cards'>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
            <li>
              <h3>Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}