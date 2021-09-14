import React from 'react';
import Firebase, { FirebaseContext } from '../Firebase';
import HomeHeader from '../Home/HomeHeader';
import NavigationMenu from '../Home/NavigationMenu';

interface NavigationProps {
  children: JSX.Element;
}

const Navigation = ({ children }: NavigationProps): JSX.Element => (
  <FirebaseContext.Consumer>
    {(firebase) => (
      <div className="container">
        <HomeHeader user={firebase?.auth.currentUser?.email} />
        <NavigationMenu />
        {children}
      </div>
    )}
  </FirebaseContext.Consumer>
);

export default React.memo(Navigation);
