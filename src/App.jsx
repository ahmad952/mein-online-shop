import React, { Component } from 'react'
import Product from "./component/product";
import Navbar from "./component/navbar";
import ShoppingCard from './component/shopping-card';

class App extends Component {
    state = { 
items: []

     } 


addItem = (amount,name,price) =>{
    //umm man this zugreifen oder state 
let currentItems = this.state.items;

let existingItem =this.state.items.find(item => item.name == name);


if (existingItem){
   existingItem.amount++;

}else{
currentItems.push({
    amount,name,price
});
};
this.setState({items: currentItems})


}
    render() { 
        return<React.Fragment>
            <Navbar/>
            <div className='main-container'>
            <div className='product-container'>
            <Product  onAdd={()=>this.addItem(1,'Tomaten','5')}  image="tomatoes.jpg" title="Tomaten" description="kostet 1 kg 5 €"   />    
            <Product onAdd={()=>this.addItem(1,'Gurken','3')} image="gurke.jpg"     title="Gurken" description="kostet 1 kg 3 €"  />  
            <Product onAdd={()=>this.addItem(1,'Äpfel','7')} image="apples.jpg"    title="Äpfel" description="kostet 1 kg 7 €"  />  
            </div>   

            <ShoppingCard items={this.state.items}/> 
            
             </div>       
         </React.Fragment>;
    }
}
 
export default App;