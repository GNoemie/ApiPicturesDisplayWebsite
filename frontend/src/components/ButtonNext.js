import React from 'react'
import { hot } from 'react-hot-loader'


class ButtonNext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            miaou: "nyaa",
          callback: function() { props.callbackParent() }
        }

        this.onClick = this.onClick.bind(this);
    }
     
    onClick() {;
        this.state.callback();
    }

    render() {
        return <div><button onClick={this.onClick}>Miaou</button></div>
    }
}

export default hot(module)(ButtonNext);