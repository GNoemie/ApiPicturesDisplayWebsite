import React from 'react'
import { hot } from 'react-hot-loader'
import '../design.css'

const Photo = (props) => <div className="image">
    <p>{props.index}</p>
    <img src="http://lorempixel.com/200/200/" />
    </div>

export default hot(module)(Photo);