import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import ButtonNext from '../components/ButtonNext'

function mapStateToProps(state) {
    const cursor = state.position.cursor;
    const nb = state.position.amount;

    return {
        cursor,
        nb
     };
}

export default hot(module)(connect(mapStateToProps)(ButtonNext));