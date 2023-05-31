import React from 'react'
import './Main.css'
import Leftside from './Left/Leftside'
import Rightside from './Right/Rightside'

const Main = () => {
    return (
        <>
            <div className="main">
                <Leftside />
                <Rightside />
            </div>
        </>
    )
}

export default Main