import React from 'react'
import { hot } from 'react-hot-loader'
import '../design.css'

import { connect } from 'react-redux';
import { del } from '../actions/actions';

class DeletePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id
        }
        this.onClick = this.onClick.bind(this);
    }
     
    onClick() {
        console.log("miaou" + this.state.id);
        this.props.dispatch(del(this.state.id));
    }

    render() {
        return <button type="button" className="btn" onClick={this.onClick}>X</button>;
    }
}

export default hot(module)(connect()(DeletePicture));