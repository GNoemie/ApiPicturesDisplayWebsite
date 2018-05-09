import React from 'react'
import { hot } from 'react-hot-loader'
import Photo from './Photo'

const API = 'http://localhost:4242/api/pictures';
const DEFAULT_QUERY = 'redux';

class PhotoCollection extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        pics: [],
        cursor: props.cursor,
        nb: props.nb
      }
      //this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch(API + "?cursor=" + this.state.cursor + "&amount=" + this.state.nb + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => {
            this.setState({ pics: JSON.parse(data) });
            console.log("meow")
          });
      }

    componentWillReceiveProps(nextProps) {
      if(this.state.cursor != nextProps.cursor) {
        console.log(this.state.cursor);
        fetch(API + "?cursor=" + nextProps.cursor + "&amount=" + nextProps.nb + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => {
              this.setState({ pics: JSON.parse(data) });
              console.log("nyanyanya")
        });
      }
    }


  
    render() {
      console.log("miaaaou")
      return(this.state.pics.map(function (pic, i) {
        return <Photo key={i} index={pic.index} />
      }))
    }
  }

export default hot(module)(PhotoCollection)