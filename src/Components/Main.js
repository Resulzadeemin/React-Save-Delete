import React from 'react'
import axios from "axios"
import Modal from "./Modal"
import style from "../Components/Main.module.css"
import { useState, useEffect } from "react"
function Main() {
    const [dress, setDress] = useState([])
    useEffect(
        () => {
            axios.get("https://my-json-server.typicode.com/emilfermanli/db/product")
                .then(respons => setDress(respons.data))
                .catch(error => error)
        },
        []
    )
    function deleteDress(id) {
        const updateDress = dress.filter(
            (a) => { return a.id != id }
        )
        setDress(updateDress)
    }
    return (
        <div className={style.main}> 
            {
                dress.map(
                    (e) => {
                        return <Modal key={e.id}
                            img={e.url}
                            dress={e.dressName}
                            id={e.id}
                            price={e.price}
                            delete={() => deleteDress(e.id)}
                        />
                    }
                )
            }
        </div>
    )
}

export default Main
