import ClientSvg from './ClientSvg'
import FreelanceSvg from './FreelanceSvg'

import './style.scss'

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
  <footer>
        <img src='/img/fiverrlogo.png' alt='logo' />
        <p>Privacy policy | Terms of service</p>
        <p>© Fiverr International Ltd. 2020</p>
  </footer>
  </div>
  </>)
}

export default Homepage