import React from 'react'
import style from "./App.module.css"
import { useState, useEffect } from "react"
import Loading from "./Components/Loading"
import Main from "./Components/Main"
function App() {
  const [loading, setLoading] = useState([])
  useEffect(
    () => {
      setInterval(() => {
        setLoading(false)
      }, 3000);
    },
  )
  //https://restcountries.eu/rest/v2/all
  return (
    <div className={style.App}>
      {
        loading ? <Loading /> : <Main />
      }
    </div>
  )
}

export default App
