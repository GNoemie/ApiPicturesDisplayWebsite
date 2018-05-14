import React from 'react'
import { hot } from 'react-hot-loader'
import '../design.css'

import { connect } from 'react-redux';
import { add } from '../actions/actions';

class AddPicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputPath: ""
        }
        this.onClick = this.onClick.bind(this);
        this.updateInputPath = this.updateInputPath.bind(this);
    }
     
    onClick() {
        this.props.dispatch(add(this.state.inputPath));
    }

    updateInputPath(e) {
        this.setState({
            inputPath: e.target.value
        })
    }

    render() {
        return (
            <div>
            <form>
                <div className="form-group">
                    <h3>Add a picture</h3>
                    <label htmlFor="url">URL :</label>
                    <input type="text" name="url" id="add" onChange={this.updateInputPath} />
                </div>
            </form>
            <button type='button' className="btn btn-default" onClick={() => this.onClick()}>Add</button>
            </div>);
    }
}

export default hot(module)(connect()(AddPicture));