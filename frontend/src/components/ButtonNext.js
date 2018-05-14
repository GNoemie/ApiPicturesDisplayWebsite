import React from 'react';
import { hot } from 'react-hot-loader';

import { connect } from 'react-redux';
import { getNext } from '../actions/actions';


class ButtonNext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cursor: 0,
            nb: 0
        }

        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        //console.log("will receive  " + nextProps.cursor);
        this.setState({
          cursor: nextProps.cursor,
          nb:  nextProps.nb
        });
    }
     
    onClick() {
        console.log("cursor" + this.state.cursor)
        this.props.dispatch(getNext(this.state.cursor, this.state.nb));
    }

    render() {
        return <div><button onClick={this.onClick} className="btn" >Miaou</button></div>
    }
}



export default hot(module)(connect()(ButtonNext));