import React, { Component } from 'react';
import BenefitsContainer from './components/BenefitsContainer';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';


class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <SideBar />
        <NavigationBar />  
        <div style={styles.pageArea}>      
          <BenefitsContainer />
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