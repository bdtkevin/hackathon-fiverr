import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import User from '../../contexts/User';
import HeaderClient from '../HeaderClient';
import HeaderFree from '../HeaderFree';
// import request from '../../utilities/request';
import './style.scss';

export default function Profil() {
  const { typeUser } = useParams();
  const history = useHistory();
  const { user, setUser } = useContext(User);
  const [jobs] = useState([
    {
      id: 1,
      job_name: 'Developer',
      categories_id: 1,
    },
    {
      id: 2,
      job_name: 'Video editor',
      categories_id: 2,
    },
    {
      id: 2,
      job_name: 'Graphic designer',
      categories_id: 3,
    },
  ]);

  // const getJobs = async () => {
  //   try {
  //     const { data } = await request({
  //       method: 'get',
  //       url: `/users/${user.id}/jobs`,
  //     });
  //     console.log(data);
  //     setJobs(data);
  //   } catch (err) {}
  // };

  const getCategories = (id) => {
    if (id === 1) {
      return 'Web';
    } else if (id === 2) {
      return 'Video making';
    } else if (id === 3) {
      return 'Graphism';
    } else {
      return 'unknown';
    }
  };

  useEffect(() => {
    // if (user) {
    //   getJobs();
    // }
  }, []);

  return (
    <>
      {typeUser === 'client' ? <HeaderClient /> : <HeaderFree />}
      <div className="Profil">
        {user ? (
          <>
            <button
              type="button"
              onClick={() => {
                setUser(null);
                history.push('/');
              }}
              className="logoutButton"
            >
              Log out
            </button>
            <section className="banner profil">
              <img
                src={user?.avatar_url || '/img/profile/default.svg'}
                className="avatar"
                alt="avatar"
              />
              <div className="textContainer">
                <h1>{`${user?.firstname} ${user?.lastname} (${
                  user?.display_name || 'unknown'
                })`}</h1>
                <p>
                  <em>Bio - </em>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisiut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit involuptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  <em>Birthday - </em>
                  {user?.birthday || '01-01-1970'}
                </p>
              </div>
            </section>
            <section className="banner jobs">
              <h1>Jobs</h1>
              {jobs.map((job) => {
                return (
                  <p key={job.job_name} className="job">
                    <em>{job.job_name} - </em>
                    {getCategories(job.categories_id)}
                  </p>
                );
              })}
            </section>
          </>
        ) : (
          <section className="banner jobs">
            <h1>You are disconnected</h1>
            <h1>༼ ༎ຶ ෴ ༎ຶ༽</h1>
          </section>
        )}
      </div>
    </>
  );
}
