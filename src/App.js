import logo from './logo.svg';
import Basket from './components/Basket';
import Main from './components/Main';
import Data from './components/Data';
import { useState } from 'react';
import Header from './components/Header';
function App() {
 const {products}=Data;
 const [cartitems,SetCartitems]=useState([]);
 const onAdd = (product) => {
const exists=cartitems.find(x=>x.id===product.id);
if(exists){
  SetCartitems(cartitems.map(x=>x.id===product.id?{...exists,qty:exists.qty+1}:x));
}
else{
    SetCartitems([...cartitems,{...product,qty:1}]);
}
 }
 const onRemove = (product) => {
  
  const exists=cartitems.find(x=>x.id===product.id);
  if(exists.qty==1){

 SetCartitems(cartitems.filter((x)=>x.id!==product.id))
}
else
{
  SetCartitems(cartitems.map(x=>x.id===product.id?{...exists,qty:exists.qty-1}:x));
}


   }
  
  return (
    <div className="App">
      <Header cartitemsno={cartitems.length}/>
      <div className="row">
      
        <Main onAdd={onAdd} onRemove={onRemove} products={products}/>
        <Basket onAdd={onAdd} onRemove={onRemove} cartitems={cartitems}/>
       
      </div>
      
    </div>
  );
}

export default App;
