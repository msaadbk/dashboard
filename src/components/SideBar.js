import React, { Component } from 'react';
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.container}>
        <p>This is the sidebar</p>
      </div>
    )
  }
}

const styles={
  container:{
    border: '1px solid',
    width: '20%',
    position: 'absolute',
    right: '0px',
    top: 100,
    height: '100%',
  }
}

export default SideBar;