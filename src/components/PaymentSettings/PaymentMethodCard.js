import React, { Component } from 'react';

class PaymentMethodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.card}>
        <img></img>
        <span>{this.props.data.type}</span>
        <br></br>
        <span>{this.props.data.number}</span>
        <br></br>
        <span>Valid until {this.props.data.date}</span>
      </div>
    )

  }

}

const styles = {
  card: {
    border: '1px solid',
  }
}

export default PaymentMethodCard;