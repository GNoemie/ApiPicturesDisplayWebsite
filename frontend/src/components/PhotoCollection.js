import React from 'react'
import { hot } from 'react-hot-loader'
import Photo from './Photo'

import { connect } from 'react-redux';
import { getNext } from '../actions/actions';

const API = 'http://localhost:4242/api/pictures';
const DEFAULT_QUERY = 'redux';

class PhotoCollection extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        pics: []
      }
    }

    componentDidMount() {
      this.props.dispatch(getNext(0, 15));
    }

    componentWillReceiveProps(nextProps) {
      //console.log("will receive  " + nextProps.pics[0].picture);
      this.setState({
        pics: nextProps.pics
      });
    }
 
    render() {
      return(this.state.pics.map(function (pic, i) {
        //console.log("effectif   " + pic.toSource());
        return <Photo key={i} index={pic.index} path={pic.picture} id={i} />
      }))
    }
  }

export default hot(module)(connect()(PhotoCollection));