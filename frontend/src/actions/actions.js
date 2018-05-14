//action types
export const REQUEST_NEXT = 'REQUEST_NEXT';
export const RECEIVE_NEXT = 'RECEIVE_NEXT';

const API = 'http://localhost:4242/api/pictures';

//action creators
const requestNext = function(cursor, amount) {
    console.log("requestNext");
    return {
        type: REQUEST_NEXT
    }
}

const receiveNext = function(data) {
    console.log("receiveNext");
    return {
        type: RECEIVE_NEXT,
        pictures: JSON.parse(data)
    }
}

export function getNext(cursor, amount) {
    return (dispatch) => {
        dispatch(requestNext(cursor, amount))

        fetch(API + "?cursor=" + cursor + "&amount=" + amount)
          .then(response => response.json())
          .then(data => {
            dispatch(receiveNext(data));
          });
    }
    console.log("ACTION");
}