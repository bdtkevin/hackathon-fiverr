import ClientSvg from './ClientSvg';
import FreelanceSvg from './FreelanceSvg';
import Footer from '../Footer';

import './style.scss';

<<<<<<< HEAD
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
=======
const Homepage = ()=> {
  return (<>
  <div className="main">
  <header>
    <img src='/img/fiverrlogo.png' alt='logo' className='logoHomepage' />
    
  </header>
  <div className="content">
      <ClientSvg />
      <FreelanceSvg/>
  </div>
  </div>
  </>)
}
>>>>>>> 8dc0b6181cdb279c79d516dc6abc604634807bdd

export default Homepage;
