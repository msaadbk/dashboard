import React, { Component } from 'react';

class BenefitsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    // condition ? condition_true : else
    // condition && what_to_do
    // if status --> done, render + / if status --> cancelled, render - / if status --> in progress, render timeline
    var condition;
    if(this.props.data.status === "done") {
      condition = "+";
    } else if(this.props.data.status === "cancelled"){
      condition = "-";
    } else if(this.props.data.status === "in_progress"){
      condition = this.props.data.timeline;
    }
    return (
      <div style={styles.container}>
        <p style={styles.tabTitle}>{this.props.data.title}</p>
        <p style={styles.tabDesc}>{this.props.data.description}</p>
        <p>{condition}</p>
      </div>
    )
  }


}

const styles = {
  container: {
    width: 150,
    height: 80,
    border: '1px solid',

  },
  tabTitle:{
    fontSize: 10,
  },
  tabDesc:{
    fontSize: 6,
  },
}

export default BenefitsCard;