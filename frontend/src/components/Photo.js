import React from 'react';
import { hot } from 'react-hot-loader';
import '../design.css';
import '../bootstrap.min.css'

import { connect } from 'react-redux';

class Photo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: props.index,
            path: props.path
        }
        this.onClick = this.onClick.bind(this);
    }
     
    onClick() {
        this.props.dispatch(getNext(this.state.cursor, this.state.nb));
    }

    componentWillReceiveProps(p) {
        //console.log("dsafsadfasdfasdfasdfa" + this.state.index)
        //console.log(p.index) //CECI EST BIZARRE EXPLICATION SVP
        this.setState({
            index: p.index,
            path: p.path
        })
    }

    render() {
        return (
            <div className="image">
                <p>{ this.state.index }
                    <button className="btn" onClick={ () => this.onClick }>x</button>
                </p>
                <img src={ this.state.path } />
            </div>
        );
    }
}

export default hot(module)(connect()(Photo));