import React from 'react'
import { useState } from 'react'
const Card = (props) => {
    const [monthly, setmonthly] = useState(true)


    return (
        <div className="mt-8 p-8 bg shadow-lg rounded w-3/5 h-full text-center">
                <p className="mb-6 ">{props.package}</p>
                <h1 className="text-6xl font-extrabold mb-4">{props.price}</h1>
                <hr/>
                <p className="font-bold text-sm my-4">500 GB Storage</p>
                <hr/>
                <p className="font-bold text-sm my-4">2 Users Allowed</p>
                <hr/>
                <p className="font-bold text-sm my-4">Send up to 3 GB</p>
                <hr/>
                <button className="mt-8 text-sm bg-gradient-to-l from-primary-test2 to-primary-test w-4/5 h-10 rounded shadow-inner text-primary-Very-Light-Grayish-Blue">LEARN MORE</button>
        </div>
    )
}

export default Card
