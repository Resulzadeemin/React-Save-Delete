import React from 'react'
import style from "../Components/DeleteTodo.module.css"
import { AiFillDelete } from "react-icons/ai";
function DeleteTodo(props) {
    return (
        <div className={style.deleteTodo}>
            <h4>{props.text2}</h4>
            <button onClick={props.delete2}><AiFillDelete style={{fontSize:"20px"}} /></button>
        </div>
    )
}

export default DeleteTodo
