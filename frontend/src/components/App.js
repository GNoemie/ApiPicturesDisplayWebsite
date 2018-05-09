import React from 'react'
import { hot } from 'react-hot-loader'
import PhotoCollection from './PhotoCollection'
import ButtonNext from './ButtonNext'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          cursor: 0,
          nb: 15
        }

        this.onClick = this.onClick.bind(this);
      }

    onClick() {
        console.log("CLICK");
        this.setState({cursor: this.state.cursor + this.state.nb})
    }

    render() {
        return  <div>
            <ButtonNext callbackParent={this.onClick}/>
            <PhotoCollection cursor={this.state.cursor} nb={this.state.nb}/>
            </div>;
    }
}

export default hot(module)(App)