import {useState} from 'react'
import Header from '../Header';
import Footer from '../Footer'
import './style.scss'
import request from '../../utilities/request.js';

const CreateTeam = ()=>{

const [category,setCategory] = useState('');
const [job, setJob] = useState('');

const handleSubmit = ()=>{

  const dataToSend = {
    category : category,
    job : job
  }

  request({ method: 'post', url: '/create-team', data: dataToSend });
  console.log(dataToSend)
}

  return (<>
    <Header />
    <section className="banner">
      <div className="textContainer">
        <h1>
          Create my team
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src="/img/createTeamImg/teamImg.svg" alt="" />
    </section>
    <section className="domain">
      <button onClick={()=>setCategory("web")} className={category==="web"?"webContainer selected":"webContainer"} >
        <h2 className="title">
          Web
        </h2>
        <img src="/img/createTeamImg/webIllu.svg" alt="" />
      </button>
      <button className={category==="graphism"?"graphismContainer selected":"graphismContainer"} onClick={()=>setCategory("graphism")}>
        <h2>
          Graphism
        </h2>
        <img src="/img/createTeamImg/graphismIllu.svg" alt="" />
      </button>
      <button className={category==="video"?"videoContainer selected":"videoContainer"} onClick={()=>setCategory("video")}>
        <h2>
          Video making
        </h2>
        <img src="/img/createTeamImg/videoIllu.svg" alt="" />
      </button>
    </section>
    <section className="criteria">

      <p>I'm a 
        <select onChange={(e)=>setJob(e.target.value)} value={job}>
        {category === "web" && <><option value="developper web">Developper web</option><option value="UI designer">UI designer</option><option value="UX designer">UX designer</option></>}
        {category === "graphism" && <><option value="artisti cdirector">Artistic Director</option><option value="graphist">Graphist</option><option value="redactor">Redactor</option></>}
        {category === "video" && <><option value="editor">Editor</option><option value="animator">Animator</option><option value="sound designer">Sound designer</option></>}
        </select>looking for friendly people to collaborate !</p>
        
      <button onClick={()=>handleSubmit()} className="createButton">
      Create
      </button>
    </section>
    <Footer />
</>
  )
}
export default CreateTeam;