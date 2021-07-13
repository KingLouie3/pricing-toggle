import React from 'react'
import { useState } from 'react'
const Card = (props) => {
    const [monthly, setmonthly] = useState(true)

    
    return (
        <div className="mt-8 p-8 shadow-lg rounded w-3/5 h-full text-center bg-gradient-to-r from-primary-test to-primary-test2">
                <p className="mb-6 text-primary-Very-Light-Grayish-Blue">{props.package}</p>
                <h1 className="text-5xl font-extrabold mb-4 text-primary-Very-Light-Grayish-Blue">{props.price}</h1>
                <hr/>
                <p className="font-bold text-sm my-4 text-primary-Very-Light-Grayish-Blue">500 GB Storage</p>
                <hr/>
                <p className="font-bold text-sm my-4 text-primary-Very-Light-Grayish-Blue">2 Users Allowed</p>
                <hr/>
                <p className="font-bold text-sm my-4 text-primary-Very-Light-Grayish-Blue">Send up to 3 GB</p>
                <hr/>
                <button className="mt-8 text-sm bg-primary-Very-Light-Grayish-Blue font-bold w-4/5 h-10 rounded shadow-inner text-primary-test">LEARN MORE</button>
        </div>
    )
}

export default Card
