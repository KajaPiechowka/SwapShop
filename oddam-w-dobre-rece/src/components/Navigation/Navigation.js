import React from 'react';
import PropTypes from 'prop-types';
import LoginNav from './LoginNav';



const Navigation = ({children}) => ( <>
        <LoginNav/>
        
        {children}
</>
    );

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Navigation