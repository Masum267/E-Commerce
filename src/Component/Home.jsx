import React from 'react'

function Home() {
    return (
        <div>
            <div className="relative ">
                <img src="/assets/bga.jpg" 
                    className="w-screen"
                />
                <h1 className="absolute text-5xl text-slate-800 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold mb-0">
                    NEW SESSION ARRIVALS</h1>
                <p className="absolute text-3xl text-slate-700 top-1/3 left-1/2 -translate-x-1/2 font-medium"
                >
                    CHECK OUT ALL THE TRENDS
                </p>
            </div>
        </div>
    )
}

export default Home