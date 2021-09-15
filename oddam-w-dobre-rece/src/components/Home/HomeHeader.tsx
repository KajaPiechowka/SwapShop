import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Firebase from '../Firebase';

interface HomeHeaderProps {
  firebase: Firebase | null;
}

const HomeHeader = ({ firebase }: HomeHeaderProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase?.auth.onAuthStateChanged((authUser) => {
      if (authUser?.email) {
        setIsLoggedIn(true);
      }
      setIsLoggedIn(false);
    });
  }, []);

  const logOut = () => {
    setIsLoggedIn(false);
    firebase?.auth.signOut();
    history.push('/logout');
  };

  return (
    <ul className="loginWrapper">
      {isLoggedIn ? (
        <>
          <li>
            <p>Cześć {firebase?.auth.currentUser?.email}!</p>
          </li>
          <li className="loginWrapper__list-animated">
            <Link
              className="loginWrapper__link loginWrapper__link-yellow"
              to="/swap-shop"
            >
              Oddaj Rzeczy
            </Link>
          </li>
          <li className="loginWrapper__list-animated">
            <button
              type="button"
              onClick={logOut}
              className="loginWrapper__button"
            >
              Wyloguj
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="loginWrapper__list-animated">
            <Link className="loginWrapper__link" to="/login">
              Zaloguj
            </Link>
          </li>
          <li className="loginWrapper__list-animated">
            <Link
              className="loginWrapper__link loginWrapper__link-yellow"
              to="/register"
            >
              Załóż konto
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default HomeHeader;
