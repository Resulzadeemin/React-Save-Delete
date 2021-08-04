import React from 'react'
import { useState } from "react"
import Delete from "./Delete"
import style from "../Components/Modal.module.css"
import Quantity from './Quantity'
import Todo from "../Components/Todo"
import { AiFillDelete } from "react-icons/ai";
function Modal(props) {
    const [show, setShow] = useState(false)
    const [quantity,setQuantity] = useState(1)
    function openModal() {
        setShow(!show)
    }
    function closeModal() {
        setShow(!show)
    }
    const [price, setPrice] = useState(false)
    function add() {
        setPrice(!price)
    }
    return (
        <div className={style.modal}>
            <img src={props.img} />
            <p className="animate__animated animate__bounce animate__repeat-2" >{props.dress}</p>
            <button className="animate__animated animate__bounceInLeft animate__delay-2s" type="text" onClick={add}>{price ? <h4>Geri don</h4> : <h4>Qiymetine baxin</h4>}</button>
            {
                price ? <h2>{quantity * props.price}$</h2> : null
            }
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <div>
                <button className="animate__animated animate__bounceInRight animate__delay-2s" type="text" onClick={openModal}><AiFillDelete style={{fontSize:"20px"}} /></button>
                {
                    show ? <Delete delete={props.delete} save={closeModal} /> : null
                }
            </div>
            <Todo />
        </div>
    )
}

export default Modal
