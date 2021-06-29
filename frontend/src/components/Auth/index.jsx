import { useEffect, useState, useContext } from 'react';
import User from '../../contexts/User';
import Login from './Login';
import Signup from './Signup';
import './style.scss';

export default function Auth({ setDisplayModal }) {
  const [modalContent, setModalContent] = useState('login');
  const { user, setUser } = useContext(User);

  const closeModal = () => {
    setDisplayModal(false);
  };

  const handleClick = (e) => {
    if (e.target.id === 'modal-auth') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id='modal-auth'>
      <div className='modal-content'>
        {modalContent === 'login' && <Login />}
        {modalContent === 'signup' && <Signup />}
      </div>
    </div>
  );
}
