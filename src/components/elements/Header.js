import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png'
import TMDBLogo from '../images/tmdb_logo.svg'

import {
    StyledHeader, 
    StyledRMDBLogo, 
    StyledTMDBLogo
} from '../styles/StyledHeader';

// 1. Learn how to create a basic styled component
// 2. Learn how to handle props in styled components
// 3. Create a global style with styled components



const Header = () => (
<StyledHeader>
    <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/>
    </div>
</StyledHeader>)

export default Header;