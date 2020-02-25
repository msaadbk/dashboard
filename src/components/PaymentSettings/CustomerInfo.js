import React, { Component } from 'react';

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      // name: '',
      // image: '',
    }
  }

  render() {
    return(
      <div style={styles.container}>
        <span>CustomerInfo</span>
        <br></br>
        <span>Member since {"date"}</span>
        <br></br>
        <a href="">Change display pic</a>
        {/* <img></img> */}

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
export default CustomerInfo;