import React from 'react';
import HeaderComponent from '../../components/headercomponent/header.component';
import OKRComponent from '../../components/okrcomponent/okr.component';
import FooterComponent from '../../components/footercomponent/footer.component';
const LandingPage = () => {
  return (
    <div>
      <HeaderComponent />
      <OKRComponent />
      <FooterComponent />
    </div>
  );
};

export default LandingPage;
