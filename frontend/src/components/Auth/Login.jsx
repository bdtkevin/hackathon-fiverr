import { useState } from 'react';

export default function Login() {
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

  const handleSubmit = () => {};

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
      <div className='part-link'></div>
    </>
  );
}
