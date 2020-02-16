import React, { Component } from 'react';

class BenefitsDesc extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div style={styles.container}>
              <h1>Membership status</h1>
              <div>
                <h1>Basic</h1>
                <p>Started on {"15 Feb 2018"} and expires on {"15 Jan 2020"}  </p>
              </div>
              <div> 
                <p>{"$400"}</p>
                <p>{"Annual plan, paid monthly"}</p>
                <input type = "button" value = "Download contract" />
                <input type = "button" value = "Cancel membership" />
              </div>
              
            {/* <p> We need to put 3 things here: 1) Heading lable 2) div 3) 2 buttons</p> */}
            </div>
        
        )
    }
}

const styles = {
  container: {
    border: '1px solid',
  }
}

export default BenefitsDesc;