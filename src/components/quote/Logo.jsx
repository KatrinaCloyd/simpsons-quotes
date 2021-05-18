import React from 'react'
import style from "../app/app.css"

export default function Logo() {
    return (
        <img className={style.logo} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Simpsons_Logo.svg/1280px-The_Simpsons_Logo.svg.png'} alt='Simpsons Logo' />
    )
}
