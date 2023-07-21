import React from 'react';
import YoutubeLogo from './YoutubeLogo.svg';
import { NavContainer, Logo } from './navStyles';

function Nav({ children }) {
  return (
    <NavContainer>
      <Logo src={YoutubeLogo} alt='' />
      {children}
    </NavContainer>
  );
}

export default React.memo(Nav);
