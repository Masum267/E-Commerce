import React, {useState, useEffect, useLayoutEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Product = ()=> {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading = ()=>{
        return(
            <>
                Loading....
            </>
        )
    }

    const ShowProduct = ()=>{
        return(
            <div className='flex justify-between'>
                <div className="md:w-1/2 pr-4 pl-8 pt-6">
                    <img src={product.image} alt={product.title} height='300px'width='300px'/>
                </div>
                <div className="md:w-1/2 pr-4 pl-4 pt-6 space-y-2">
                    <h4 className='uppercase text-slate-600 font-semibold'>
                        {product.category}
                    </h4>
                    <h1 className='text-3xl font-normal'>{product.title}</h1>
                    <p className='text-slate-600 font-extrabold'>Rating {product.rating && product.rating.rate}
                    <span className="star text-yellow-400">&#9733;</span> 
                    </p>
                    <h3 className='text-3xl font-bold'>
                        ${product.price}
                    </h3>
                    <p>
                        {product.description}
                    </p>
                    <button className='px-4 py-2 border rounded-md hover:text-white hover:bg-slate-900'>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className='ms-2 px-3 py-2 border rounded-md hover:text-white hover:bg-slate-900'>
                        Go to Cart
                    </NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </>
    )
}

export default Product
