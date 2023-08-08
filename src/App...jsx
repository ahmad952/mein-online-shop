import React, { Component } from 'react'
import Product from "./component/product";
import Navbar from "./component/navbar";


class App extends Component {
    state = {  } 
    render() { 
        return<React.Fragment>
            <Navbar/>
            <div className='product-container'>
            <Product/>    
            <Product/>  
            <Product/>  
            </div>                
         </React.Fragment>;
    }
}
 
export default App;