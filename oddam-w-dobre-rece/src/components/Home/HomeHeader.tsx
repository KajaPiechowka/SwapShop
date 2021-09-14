import React from 'react';
import { Link } from 'react-router-dom';


interface HomeHeaderProps{
  user?: string | null
}

const HomeHeader = ({user}:HomeHeaderProps):JSX.Element => (
  <ul className="loginWrapper">
    {user?
    <>
    <li >
      <p >Cześć {user}!</p>
      </li>
      <li className="loginWrapper__list-animated">
      <Link className="loginWrapper__link loginWrapper__link-yellow" to="/swap-shop">
       Oddaj Rzeczy
      </Link>
    </li>
      <li className="loginWrapper__list-animated">
        <button type="button" className="loginWrapper__button">Wyloguj</button>
        </li>
        </> :
        <>
        <li className="loginWrapper__list-animated">
      <Link className="loginWrapper__link" to="/login">
        Zaloguj
      </Link>
    </li>
    <li className="loginWrapper__list-animated">
      <Link className="loginWrapper__link loginWrapper__link-yellow" to="/register">
        Załóż konto
      </Link>
    </li>
    </>}
  </ul>
);



export default HomeHeader;
