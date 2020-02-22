import React, { Component } from 'react';

class MembershipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div style={styles.container}> 
        <span>{this.props.data.categ}</span>
        <br></br>
        <span>{this.props.data.subscriptions[0].type}</span>
        <br></br>
        <span>{this.props.data.subscriptions[0].price}{this.props.data.subscriptions[0].unit}</span>
        <span>Benefits
          <br></br>
          {this.props.data.benefits[0]}
          <br></br>
          {this.props.data.benefits[1]}
          <br></br>
          {this.props.data.benefits[2]}
          <br></br>
          {this.props.data.benefits[3]}
          <br></br>
          {this.props.data.benefits[4]}
          <br></br>
          <input type="button" value="Get Started"/>
        </span>
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
export default MembershipCard;

