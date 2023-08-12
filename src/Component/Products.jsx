import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div className='text-center'>
                Loading...
            </div>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        console.log(updatedList)
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons flex justify-center mb-5 pb-5 space-x-6 font-medium'>
                    <button className='me-2 hover:text-slate-500' onClick={() => setFilter(data)}>All</button>
                    <button className='me-2 hover:text-slate-500' onClick={() => filterProduct("men's clothing")}>Men's Collection</button>
                    <button className='me-2 hover:text-slate-500' onClick={() => filterProduct("women's clothing")}>Women's Collection</button>
                    <button className='me-2 hover:text-slate-500' onClick={() => filterProduct("jewelery")}>Jewelery Collection</button>
                    <button className='me-2 hover:text-slate-500' onClick={() => filterProduct("electronics")}>Electronic Collection</button>
                </div>
                <div className='container mx-auto mt-8 ml-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {filter.map((product) => {
                            return (

                                <div className=''>

                                    <div className="h-full max-w-sm overflow-hidden text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                        key={product.id}
                                    >
                                        <NavLink to="#">
                                            <img className="p-8 rounded-t-lg h-96 w-full" src={product.image} alt={product.title}  />
                                        </NavLink>
                                        <div className="px-5 pb-5">
                                            <NavLink to="#">
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.substring(0, 12)}...</h5>
                                            </NavLink>

                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                                <NavLink to={`/products/${product.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</NavLink>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row-auto'>
                    <div className='col-span-12 mb-5'>
                        <h1 className='text-center font-bold text-2xl'>
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className='row-auto justify-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products