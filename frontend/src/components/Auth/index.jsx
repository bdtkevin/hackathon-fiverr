import { useEffect, useState, useContext } from 'react';
import User from '../../contexts/User';
import Login from './Login';
import Signup from './Signup';
import './style.scss';

export default function Auth({ setDisplayModal }) {
  const [modalContent, setModalContent] = useState('login');
  const { user } = useContext(User);

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
    if (user) {
      setModalContent('disconnect');
    }

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id='modal-auth'>
      <div className='modal-content'>
        {modalContent === 'login' && (
          <Login
            setDisplayModal={setDisplayModal}
            setModalContent={setModalContent}
          />
        )}
        {modalContent === 'signin' && (
          <Signup
            setDisplayModal={setDisplayModal}
            setModalContent={setModalContent}
          />
        )}
      </div>
    </div>
  );
}
