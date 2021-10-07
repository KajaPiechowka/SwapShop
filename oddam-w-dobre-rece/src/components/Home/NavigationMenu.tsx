import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



interface MenuElementProps{
  location: string,
  direction:string,
  text:string
}

const MenuElement = ({location, direction,text}: MenuElementProps) =>
location === '/' ? <Link smooth={true} duration={800}
delay={100} to={direction}>{text}</Link> : <NavLink to="/" >{text}</NavLink>


const NavigationMenu = () => {
  const location = useLocation()


  return(
  <ul className="menu">
    <li className="menu__start">
      <MenuElement direction="start" text="Start" location={location.pathname}/>
    </li>
    <li>
      <MenuElement direction="what-about" text="O co chodzi?" location={location.pathname}/>
    </li>
    <li>
      <MenuElement direction="about-us" text="O nas" location={location.pathname}/>
    </li>
    <li>
      <MenuElement direction="partners" text="Fundacje i organizacje" location={location.pathname}/>
    </li>
    <li>
      <MenuElement direction="contact" text="Kontakt" location={location.pathname}/>
    </li>
  </ul>
)
};

export default NavigationMenu;
