import React, { Component } from 'react';
class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div style = {styles.logo}>
          <span>Loyica</span>
        </div>
        <div style = {styles.customerDetails}>
          <span>image here</span>
          <span>Steve Brown</span>
        </div>
      </div>
    )
  }
}

const styles={
  container:{
    border: '1px solid',
    height: 50,
    boxSizing: 'border-box',
  },
  logo: {
    textAlign: 'left',
  },
  customerDetails:{
    textAlign: 'right',
  }
}

export default SiteHeader;