import React from 'react'
import { hot } from 'react-hot-loader'
import Photos from '../containers/Photos'
import ButtonNext from '../containers/ButtonNext'
import AddPicture from './AddPicture'

import { connect } from 'react-redux';


class App extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
        return  <div>
            <AddPicture />
            <ButtonNext />
            <Photos />
            </div>;
    }
}

export default connect()(hot(module)(App));