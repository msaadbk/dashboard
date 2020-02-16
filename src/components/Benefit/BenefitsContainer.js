import React, { Component } from 'react';
import BenefitsCard from './BenefitsCard';
import BenefitsDesc from './BenefitsDesc';

const demo = [
  {
    title: "Social media design",
    description: "abcd",
    status: "done",
  },
  {
    title: "promotional design",
    description: "cdef",
    status: "cancelled",
  },
  {
    title: "vouchers",
    description: "abycett",
    status: "in_progress",
    timeline: "1/mo",
  },
]

class BenefitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <BenefitsDesc /> 
        <div style={styles.container}>        
          <h1 style={styles.heading}>Benefits</h1>
          <BenefitsCard styles={styles.card} data={demo[0]} />
          <BenefitsCard styles={styles.card} data={demo[1]} />
          <BenefitsCard styles={styles.BenefitsCard} data={demo[2]} />
          <input type="button" value="Upgrade now" />
        </div>
      </div>

    )
  }
}

const styles = {
  heading: {
    color: 'blue',
  },
  card: {
    float: 'left',
  },
  container: {
    border: '1px solid',
  }

}

export default BenefitsContainer;