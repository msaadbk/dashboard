import React, { Component } from 'react';
import BenefitsContainer from './components//Benefit/BenefitsContainer';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import SiteHeader from './components/SiteHeader';
import MembershipContainer from './components/Membership/MembershipContainer';
import PaymentSettingsContainer from './components/PaymentSettings/PaymentSettingsContainer';


class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <SiteHeader />
        <NavigationBar />  
        <SideBar />
        <div style={styles.pageArea}>      
          {/* <BenefitsContainer /> */}
          {/* <MembershipContainer /> */}
          <PaymentSettingsContainer />
        </div>
      </div>
    )
  }
}

const styles = {
  pageArea: {
     width: '80%',
  },
}

export default AppContainer;