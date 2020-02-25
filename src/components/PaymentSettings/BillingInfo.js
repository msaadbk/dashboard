import React, { Component } from 'react';

class BillingInfo extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div style={styles.container}>
        <span>BillingInfo</span><br></br>      
        <label>Street Address</label> <input type="text" />
        <label>VAT</label> <input type="text" />
        <label>Phone Number</label> <input type="text" />
        <label>Country</label> <input type="text" />
        <label>City</label> <input type="text" />
        <label>Zip Code</label> <input type="text" />
      </div>
    )
  }
}

const styles = {
  container: {
    width: 800,
    height: 220,
    border: '1px solid',
  }
}

export default BillingInfo;