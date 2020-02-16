import React, { Component } from 'react';

class MembershipContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.container}>
        <span>Here we will print:
          1) A Heading
          2) A paragraph
          3) A small heading
          4) 3 cards(these cards will have details in form of text and a button)
        </span>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid',
  }
}

export default MembershipContainer;