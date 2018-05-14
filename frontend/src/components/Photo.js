import React from 'react'
import { hot } from 'react-hot-loader'
import '../design.css'

import { connect } from 'react-redux';

const Photo = (props) => <div className="image">
    <p>{props.index}</p>
    <img src="http://lorempixel.com/200/200/" />
    </div>
/*
function mapStateToProps(state, ownProps) {
    console.log("test   " + state.pictures.toSource());
    const pic = state.pictures.find(p => p.id === ownProps.index);
    return { pic };
}*/

export default hot(module)(connect(/*mapStateToProps*/)(Photo));