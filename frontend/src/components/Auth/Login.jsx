import { useState, useContext } from 'react';
import User from '../../contexts/User';
import request from '../../utilities/request';

export default function Login() {
  const { user, setUser } = useContext(User);
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

  const handleSubmit = async () => {
    try {
      const { data } = await request({
        method: 'post',
        url: 'auth/login',
        data: formLogin,
      });
      console.log(data);
      setUser(data);
    } catch (err) {
      console.log('---------', err, '-----------');
      // toast.error('Connexion impossible', {
      //   position: 'bottom-right',
      //   autoClose: 3000,
      // });
    }
  };

  return (
    <>
      <div className='modal-scroll'>
        <h1>Log in</h1>
        <form>
          <div>
            <input
              type='email'
              class='input-form email'
              name='email'
              placeholder='Enter your email'
              value={formLogin.email}
              onChange={handleInput}
            />
            <input
              type='password'
              class='input-form password'
              name='password'
              placeholder='Enter your password'
              value={formLogin.password}
              onChange={handleInput}
            />
          </div>
          <button type='button' className='btn' onClick={handleSubmit}>
            <p className='btn-text'>Continue</p>
          </button>
        </form>
      </div>
      <footer>
        <p>Already a member ?</p>
      </footer>
    </>
  );
}
