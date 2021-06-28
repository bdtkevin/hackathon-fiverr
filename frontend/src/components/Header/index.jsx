import './style.scss';

export default function Header() {
  return (
    <div className='header'>
      <img src='/img/fiverrlogo.png' alt='logo' className='logo' />
      <ul className='team'>
        <li>
          <div className='createTeam'>Create a team</div>
        </li>
        <li>
          <div className='joinTeam'>Join a team</div>
        </li>
      </ul>
      <img src='/img/user-logo.png' alt='userlogo' className='userLogo' />
    </div>
  );
}
