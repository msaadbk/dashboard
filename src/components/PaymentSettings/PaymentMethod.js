import React, { Component } from 'react';

class PaymentMethod extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return(
      <div style={styles.container}>
        PaymentMethod. Need to put cards here
      </div>
    )
  }
}


const styles = {
  container: {
    width: 150,
    height: 220,
    border: '1px solid',
  }

}

export default PaymentMethod;