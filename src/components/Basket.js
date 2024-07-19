import React from "react";
import Product from "./Product";
export default function Basket(props){
    const { cartitems,onAdd,onRemove }=props;
    const itmprice=cartitems.reduce((a,c)=>a+c.price*c.qty,0);
    return(
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartitems.length===0 && <div>Cart is empty</div>}</div>
                
                {
                    cartitems.map((product)=>(
                    <div key={product.id} className="row">
                    <div className="col-2">{product.name}</div>
                    
                        <div>
                        <button onClick={()=>onAdd(product)} className="add">+</button>
                        <button onClick={()=>onRemove(product)} className="remove">-</button>
                        </div>
                       
                        <div className="col-1 text-right">
                        {product.qty} *{product.price.toFixed(2)} =${product.qty*product.price}
                        
                        </div>
                    
                        
                        </div>
                    ))
                }
                <hr></hr>
                {cartitems.length!=0 && 
                <div className="col-2 text-right">
                         Total:${itmprice.toFixed(2)}
                         </div>
}
        </aside>
    );
}