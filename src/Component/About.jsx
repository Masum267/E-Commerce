import React from 'react'

function About() {
    return (
        <div>
            <div className="relative ">
                <img src="/assets/bga.jpg" 
                    className="w-screen"
                />
                <h1 className="absolute text-5xl text-slate-800 top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold mb-0">
                    About Us</h1>
                <p className="absolute text-3xl text-slate-700 top-1/3 left-1/2 -translate-x-1/2 font-medium"
                >
                    Jo-e-commerce Group. Founded in 2015, This is a leading e-commerce platform in South Asia dedicated to accelerating progress in Bangladesh, Pakistan, Sri Lanka and Nepal through commerce and technology.
                </p>
            </div>
        </div>
    )
}

export default About