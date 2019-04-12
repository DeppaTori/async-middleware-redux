import {REQUEST_POST,RECEIVE_POST,SELECT_USER,INVALIDATE_USER} from './actions'
import { combineReducers } from 'redux';

function selectedUser(state='octocat',action){
    switch(action.type){
        case SELECT_USER:
            return action.user
        default:
            return state
    }
}


function repository(state={
    isFetching:false,
    didInvalidate:false,
    repositories:[]
},action){
    switch(action.type){
        case INVALIDATE_USER:
            return Object.assign({},state,{
                didInvalidate:true,
            })
        case REQUEST_POST:
         
            return Object.assign({},state,{
                isFetching:true,
                didInvalidate:false,
            })
        case RECEIVE_POST:
            
            return Object.assign({},state,{
                isFetching:false,
                didInvalidate:false,
                repositories:action.repositories,
                lastUpdated:action.receivedAt
            })
           
        default:
            return state
    }
}


function repositoriesByUser(state={},action){
    console.log(state);
    switch(action.type){
        case INVALIDATE_USER:
        case REQUEST_POST:
        case RECEIVE_POST:
            return Object.assign({},state,{
                [action.user]:repository(state[action.user],action)
            }) 
        default:
            return state
    }
}




const fetchApp = combineReducers({repositoriesByUser,selectedUser})

export default fetchApp

