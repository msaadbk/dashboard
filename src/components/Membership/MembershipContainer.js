import React, { Component } from 'react';
import MembershipCard from './MembershipCard';

class MembershipContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.container}>
        <MembershipCard data={plans[0]}/>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid',
  }
}

const plans = [
  {
    categ: 'Standard',
    subscriptions:
      [{ type: 'Annual plan, paid monthly', price: 1000, unit: '/mo' },
      { type: 'Annual plan, paid quarterly', price: 2500, unit: '/6mo' }],
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5'],
  },
  {
    categ: 'Enhanced',
    subscriptions: [{ type: 'Annual plan, paid monthly', price: 1000, unit: '/mo' }, { type: 'Annual plan, paid quarterly', price: 2500, unit: '/6mo' }],
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5']
  },
  {
    categ: 'Elite',
    subscriptions: [{ type: 'Annual plan, paid monthly', price: 1000, unit: '/mo' }, { type: 'Annual plan, paid quarterly', price: 2500, unit: '/6mo' }],
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5']
  },
]

export default MembershipContainer;