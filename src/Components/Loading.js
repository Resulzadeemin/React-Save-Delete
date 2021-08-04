import React from 'react'
import style from "../Components/Loading.module.css"
import loadgif from "../Foto/load.gif"
function Loading() {
    return (
        <div>
            <div className={style.loading}>
                <p>Loading</p>
                <img src={loadgif} />
            </div>
        </div>
    )
}
export default Loading
