import React, { Component } from 'react';
import BenefitsCard from './BenefitsCard'

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
        <h1 style={styles.heading}>Benefits</h1>
        <BenefitsCard data={demo[0]} />
        <BenefitsCard data={demo[1]} />
        <BenefitsCard data={demo[2]} />
        <input type="button" value="Upgrade now" />
      </div>

    )
  }
}

const styles = {
  heading: {
    color: 'blue',
  }

}

export default BenefitsContainer;