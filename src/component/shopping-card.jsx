import React, { Component } from 'react'

class ShoppingCard extends Component {
    state = {} 




    
    render() { 
        return <div className='shopping-card'>

               <h2>Werenkorb</h2>
{this.props.items.map(item => <div key={item.name}> {item.amount} X {item.name} {item.price} €</div>)}

</div>} 

}
export default ShoppingCard;