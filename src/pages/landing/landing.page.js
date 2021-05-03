import React from 'react';
import HeaderComponent from '../../components/header-component/header.component';
import OKRComponent from '../../components/okr-component/okr.component';
import FooterComponent from '../../components/footer-component/footer.component';
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
