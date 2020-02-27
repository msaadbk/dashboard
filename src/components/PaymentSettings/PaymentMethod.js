import React, { Component } from 'react';
import PaymentMethodCard from './PaymentMethodCard';

class PaymentMethod extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return(
      <div style={styles.container}>
        {
        cardData.map( (item)=> {
            return <PaymentMethodCard data={item} />
        })
      }
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

const cardData= [
  {
    type:"Visa",
    number:"xxx-xxxx-xxxx-xxx",
    date:"dd/mm/yyy1",
  },
  {
    type:"MasterCard",
    number:"yyyy-yyyy-yyy",
    date:"dd/mm/yyy2",
  }
]

export default PaymentMethod;