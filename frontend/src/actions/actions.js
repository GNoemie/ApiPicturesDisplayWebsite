//action types
export const REQUEST_NEXT = 'REQUEST_NEXT';
export const RECEIVE_NEXT = 'RECEIVE_NEXT';
export const REQUEST_ADD = 'REQUEST_ADD';
export const RECEIVE_ADD = 'RECEIVE_ADD';
export const REQUEST_DELETE = 'REQUEST_DELETE';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';

const API = 'http://localhost:4242/api/pictures';

//action creators
const requestNext = function() {
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
        dispatch(requestNext())

        fetch(API + "?cursor=" + cursor + "&amount=" + amount)
          .then(response => response.json())
          .then(data => {
            dispatch(receiveNext(data));
          });
    }
    console.log("ACTION");
}


//add
const requestAdd = function() {
    return {
        type: REQUEST_ADD
    }
}

const receiveAdd = function() {
    return {
        type: RECEIVE_ADD,
    }
}

export function add(path) {
    console.log("adddd");
    return (dispatch) => {
        dispatch(requestAdd())

        fetch('http://localhost:4242/api/pictures', {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            method: 'POST',
            body: JSON.stringify({
                picture: path
            })
        }).then(function() {
            console.log("nya")
            dispatch(receiveAdd());
            dispatch(getNext(0, 15));
        });
    }
    console.log("ACTION");
}


//delete
const requestDelete = function() {
    return {
        type: REQUEST_DELETE
    }
}

const receiveDelete = function() {
    return {
        type: RECEIVE_DELETE,
    }
}

export function del(id) {
    console.log("dilite");
    return (dispatch) => {
        dispatch(requestDelete())

        fetch('http://localhost:4242/api/pictures/' + id, {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            method: 'DELETE'
        }).then(function() {
            receiveDelete();
            dispatch(getNext(0, 15));
        });
    }
    console.log("ACTION");
}

