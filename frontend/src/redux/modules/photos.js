// imports

import { actionCreators as userActions } from "../modules/user";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";


// action creators

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    }
}

function doLikePhoto(photoId){
    return {
        type: LIKE_PHOTO,
        photoId
    }
}

function doUnlikePhoto(photoId) {
    return {
        type: UNLIKE_PHOTO,
        photoId
    }
}

// API actions

function getFeed(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch("/images/", {
            headers : {
                "Authorization" : `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setFeed(json)));
    }
}

function likePhoto(photoId) {
    return (dispatch, getState) => {
        dispatch(doLikePhoto(photoId))   // 즉각 색칠액션을 보낸다.
    }
}

// initial state

const initialState = {};

// reducer

function reducer(state=initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action); 
        case LIKE_PHOTO:
            return applyLikePhoto(state, action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state, action);
        default:
            return state
    }
}

// reducer function

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applyLikePhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if( photo.id === photoId ){
            return {...photo, is_liked: true , like_count: photo.like_count + 1}
        }
        return photo // 무변화
    });
    return { ...state, feed: updatedFeed }

}

function applyUnlikePhoto(state, action) {
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return { ...photo, is_liked: false , like_count: photo.like_count - 1}
        }
        return photo // 무변화
    });
    return {...state, feed: updatedFeed}
}

// exports

const actionCreators = {
    getFeed
};

export { actionCreators };

// default reducer export

export default reducer;
