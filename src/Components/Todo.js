import React from 'react'
import { useState } from "react"
import style from "../Components/Todo.module.css"
import DeleteTodo from "../Components/DeleteTodo"
function Todo() {
    const [input, setInput] = useState([])
    const [todo, setTodo] = useState({
        name: "",
        id: ""
    })
    function inputHandler(e) {
        const i = e.target.value
        setTodo({
            name: i,
            id: Date.now()
        })
    }
    function submitHandler() {
        setInput([
            ...input, todo
        ])
        setTodo({
            name: "",
            id: "",
        })
    }
    function deleteTodo(id) {
        const updateTodo = input.filter(
            (j) => { return j.id != id }
        )
        setInput(updateTodo)
    }
    return (
        <div className={style.todo}>
            <article className="animate__animated animate__bounceInUp animate__delay-2s">Geyim haqqinda fikirler:</article>
            <input className="animate__animated animate__bounceInUp animate__delay-2s" onChange={inputHandler}
                value={todo.name}
                placeholder="qisa birseyler yazin.."
            />
            <button className="animate__animated animate__bounceInDown animate__delay-2s" type="text" onClick={submitHandler}>Elave Et</button>
            {
                input.map(
                    (e) => {
                        return <DeleteTodo
                            key={e.id}
                            text2={e.name}
                            delete2={() => deleteTodo(e.id)}
                        />
                    }
                )
            }
        </div>
    )
}

export default Todo
