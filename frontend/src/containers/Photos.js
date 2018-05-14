import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import PhotoCollection from '../components/PhotoCollection'

function mapStateToProps(state) {
    console.log("tttt" + state.pictures.length);
    const pics = state.pictures;
    const cursor = state.cursor;
    const nb = state.amount;
    console.log("whyyy " + pics.toSource()) 

    return {
        pics,
        cursor,
        nb
     };
}

export default hot(module)(connect(mapStateToProps)(PhotoCollection));