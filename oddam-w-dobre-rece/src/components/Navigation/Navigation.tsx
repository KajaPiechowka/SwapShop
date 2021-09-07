import React from 'react';
import HomeHeader from '../Home/HomeHeader';
import NavigationMenu from '../Home/NavigationMenu';

interface NavigationProps {
  children: JSX.Element;
}

const Navigation = ({ children }: NavigationProps): JSX.Element => (
  <div className="container">
    <HomeHeader />
    <NavigationMenu />
    {children}
  </div>
);

export default Navigation;
