import React from 'react';
import { HeaderComponentWrapper } from './style';

const HeaderComponent = () => {
  return (
      <HeaderComponentWrapper>
          <img
            src="https://assets-global.website-files.com/5d8e324474cf44070af9c56b/5ee7f9c1fa1ef87541edfc8e_Full-white.png"
            sizes="114px"
            srcSet="https://assets-global.website-files.com/5d8e324474cf44070af9c56b/5ee7f9c1fa1ef87541edfc8e_Full-white-p-500.png 500w, https://assets-global.website-files.com/5d8e324474cf44070af9c56b/5ee7f9c1fa1ef87541edfc8e_Full-white.png 820w"
            alt=""
            className="logo">
           </img>
      </HeaderComponentWrapper>
  );
};

export default HeaderComponent;
