import React from 'react'
import { hot } from 'react-hot-loader'
import Photos from '../containers/Photos'
import ButtonNext from '../containers/ButtonNext'

import { connect } from 'react-redux';


class App extends React.Component {
    constructor(props) {
        super(props)
        /*this.state = {
          cursor: 0,
          nb: 15
        }*/

        //this.onClick = this.onClick.bind(this);
      }

    /*onClick() {
        console.log("CLICK");
        this.setState({cursor: this.state.cursor + this.state.nb})
    }*/

    render() {
        return  <div>
            <ButtonNext /*callbackParent={this.onClick}*//>
            <Photos /*cursor={this.state.cursor} nb={this.state.nb}*//>
            </div>;
    }
}

export default connect()(hot(module)(App));