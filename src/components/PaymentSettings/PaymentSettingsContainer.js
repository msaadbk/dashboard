import React, { Component } from 'react';
import CustomerInfo from './CustomerInfo';
import PaymentMethod from './PaymentMethod';
import BillingInfo from './BillingInfo';

class PaymentSettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <CustomerInfo />
        <PaymentMethod />
        <BillingInfo />
      </div>
      
    )
  }
}

export default PaymentSettingsContainer;