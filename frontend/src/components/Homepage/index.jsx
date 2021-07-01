import ClientSvg from './ClientSvg';
import FreelanceSvg from './FreelanceSvg';
import Footer from '../Footer';

import './style.scss';

const Homepage = () => {
  return (
    <>
      <div className="main">
        <header>
          <img src="/img/fiverrlogo.png" alt="logo" className="logoHomepage" />
        </header>
        <div className="content">
          <ClientSvg />
          <FreelanceSvg />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
