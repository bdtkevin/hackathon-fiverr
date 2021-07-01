import { useState, useContext } from 'react';
import User from '../../contexts/User';
import request from '../../utilities/request';

export default function Signup({ setDisplayModal, setModalContent }) {
  const { setUser } = useContext(User);
  const [error, setError] = useState(false);
  const [formSignin, setFormSignin] = useState({
    email: '',
    password: '',
    display_name: '',
    firstname: '',
    lastname: '',
    birthday: '',
    jobs_id: [],
  });

  const handleInput = (e) => {
    setFormSignin({
      ...formSignin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await request({
        method: 'post',
        url: 'auth/signup',
        data: formSignin,
      });
      setError(false);
      setUser(data);
      console.log(data);
      setDisplayModal(false);
    } catch (err) {
      setError(true);
    } finally {
      setModalContent(false);
    }
  };

  return (
    <>
      <div className="modal-scroll">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-login">
            <input
              type="email"
              className="input-form email"
              name="email"
              placeholder="Enter your email"
              value={formSignin.email}
              onChange={handleInput}
            />
            <input
              type="password"
              className="input-form password"
              name="password"
              placeholder="Enter your password"
              value={formSignin.password}
              onChange={handleInput}
            />
          </div>
          <div className="input-infos">
            <input
              type="text"
              className="input-form pseudo"
              name="display_name"
              placeholder="Pseudo"
              value={formSignin.display_name}
              onChange={handleInput}
            />
            <input
              type="text"
              className="input-form firstname"
              name="firstname"
              placeholder="Firstname"
              value={formSignin.firstname}
              onChange={handleInput}
            />
            <input
              type="text"
              className="input-form lastname"
              name="lastname"
              placeholder="Lastname"
              value={formSignin.lastname}
              onChange={handleInput}
            />
            <input
              type="date"
              className="input-form brithday"
              name="birthday"
              placeholder="Enter your birthday"
              value={formSignin.birthday}
              onChange={handleInput}
            />
          </div>
          {error && (
            <p className="txt-error">Error while creating the account</p>
          )}
          <button type="submit" className="btn">
            <p className="btn-text">Continue</p>
          </button>
        </form>
      </div>
      <footer>
        <p>Already a member ?</p>
        <button
          type="button"
          className="btn-footer"
          onClick={() => {
            setModalContent('login');
          }}
        >
          <p>Log in</p>
        </button>
      </footer>
    </>
  );
}
