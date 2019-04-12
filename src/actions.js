export const SELECT_USER = 'SELECT_USER'
export const INVALIDATE_USER = 'INVALIDATE_USER'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

export function selectUser(user){
    return {
        type:SELECT_USER,
        user
    }
}

export function invalidateUser(user){
    return {
        type:INVALIDATE_USER,
        user
    }
}

export function requestPost(user){
    return {
        type:REQUEST_POST,
        user
    }
}

export function receivePost(user,json){
    return {
        type:RECEIVE_POST,
        user,
        repositories:json,
        receivedAt:Date.now()
    }
}

function fetchRepositories(user){
    return function(dispatch){
        dispatch(requestPost(user))

        return fetch(`https://api.github.com/users/${user}/repos`)
        .then(
            response=>response.json(),
            error=>console.log('An error occured',error)
        )
        .then(
            json=>dispatch(receivePost(user,json))
        )
    }
}

function shouldFetchPosts(state,user){
  
    const repositories = state.repositoriesByUser[user];
    if(!repositories){
        return true
    }else if(repositories.isFetching){
        return false
    }else{
        return repositories.diInvalidate
    }
}

export function fetchPostIfNeeded(user){
    return (dispatch,getState)=>{

        if(shouldFetchPosts(getState(),user)){
            return dispatch(fetchRepositories(user))
        }
    }
}

