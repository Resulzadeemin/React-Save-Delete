import React from 'react'
import style from "../Components/Delete.module.css"
function Delete(props) {
    return (
        <div className={style.delete}>
            <article>Silinsin?</article>
            <button onClick={props.delete}>He</button>
            <button onClick={props.save}>Yox</button>
        </div>
    )
}

export default Delete
