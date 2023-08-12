import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
    const state = useSelector((state)=> state.handleCart)
    return (
        <>
            <div
                className="bg-white"
            >
                <nav
                    className="mx-auto text-lg shadow-sm flex max-w-7xl items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <NavLink to="/" className="-m-1.5 p-1.5">
                            <span className="text-lg font-semibold">Logo</span>
                            {/* <img className="h-8 w-auto" src="#" alt="abdullah" /> */}
                        </NavLink>
                    </div>
                    <ul
                        className="hidden lg:flex lg:gap-x-12"
                    >
                        <li>
                            <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="text-sm font-semibold leading-6 text-gray-900">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div 
                        className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-end"
                    >
                        <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </NavLink>
                        <NavLink to="/signup" className="text-sm font-semibold leading-6 text-gray-900">
                            Sign up
                        </NavLink>
                        <NavLink to="/cart" className="text-sm font-semibold leading-6 text-gray-900">
                            Cart ({state.length})
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
