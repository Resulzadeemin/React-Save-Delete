import React from 'react'
import { useState } from "react"
function Quantity({ quantity, setQuantity }) {
    const [number, setNumber] = useState(1)
    function add() {
        setNumber(number + 1)
        setQuantity(quantity + 1)
    }
    function sub() {
        if (number == 0) {
            return (setNumber)
        }
        else {
            (setNumber(number - 1))
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <button className="animate__animated animate__bounceInUp animate__delay-2s" onClick={sub}>-</button>
            <button className="animate__animated animate__bounceInUp animate__delay-2s" onClick={add}>+</button>
            <div>
                <h1 className="animate__animated animate__bounceInDown animate__delay-2s" style={{ color: "crimson" }}>{number}</h1>
            </div>
        </div>
    )
}

export default Quantity
