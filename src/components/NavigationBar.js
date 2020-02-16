import React, { Component } from 'react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div style={styles.container}>
        <p>{"Secondary Navigation Bar"}</p>
        <a href="">{"Benefits"}</a>
        <a href="">{"History"}</a>
        <a href="">{"Upgrade"}</a>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid',
    height: 100,
    boxSizing: 'border-box',
  }
}
export default NavigationBar;

