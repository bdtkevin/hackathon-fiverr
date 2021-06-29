import { useState, useContext } from 'react';
import User from '../../contexts/User';
import request from '../../utilities/request';

export default function Login({ setDisplayModal, setModalContent }) {
  const { setUser } = useContext(User);
  const [error, setError] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await request({
        method: 'post',
        url: 'auth/login',
        data: formLogin,
      });
      setError(false);
      setUser(data);
      setDisplayModal(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className='modal-scroll'>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              className='input-form email'
              name='email'
              placeholder='Enter your email'
              value={formLogin.email}
              onChange={handleInput}
            />
            <input
              type='password'
              className='input-form password'
              name='password'
              placeholder='Enter your password'
              value={formLogin.password}
              onChange={handleInput}
            />
          </div>
          {error && (
            <p className='txt-error'>
              Wrong username or password, please try again.
            </p>
          )}
          <button type='submit' className='btn'>
            <p className='btn-text'>Continue</p>
          </button>
        </form>
      </div>
      <footer>
        <p>Not a member ?</p>
        <button
          type='button'
          className='btn-footer'
          onClick={() => {
            setModalContent('signin');
          }}
        >
          <p>Sign in</p>
        </button>
      </footer>
    </>
  );
}
