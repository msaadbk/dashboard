import React, { Component } from 'react';
import Heading from './components/Heading';
import BenefitsContainer from './components/BenefitsContainer';


class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Heading />
        <BenefitsContainer />
      </div>
    )
  }
}

export default AppContainer; 