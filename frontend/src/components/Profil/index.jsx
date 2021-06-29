import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import User from '../../contexts/User';
import HeaderClient from '../HeaderClient';
import HeaderFree from '../HeaderFree';
import './style.scss';

export default function Profil() {
  const { typeUser } = useParams();
  const { user, setUser } = useContext(User);

  return (
    <>
      {typeUser === 'client' ? <HeaderClient /> : <HeaderFree />}
      <div className="Profil">
        <p>profil</p>
      </div>
    </>
  );
}
