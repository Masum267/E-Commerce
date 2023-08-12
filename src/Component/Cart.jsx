import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const handleButton = ()=>{
        
    }
    return (
        <>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={Product.image} alt={Product.title} height="200px" width="180px" />
                        </div>
                        <div>
                            <h3>{Product.title}</h3>
                            <p>
                                {Product.qty} X ${Product.price} = ${Product.qty * Product.price}
                            </p>
                            <button onClick={()=>handleButton(product)}>+</button>
                            <button onClick={()=>handleButton(product)}>-</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
