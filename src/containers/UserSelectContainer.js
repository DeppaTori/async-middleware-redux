import React from 'react'
import UserSelect from '../components/UserSelect'
import {connect} from 'react-redux'
import {fetchPostIfNeeded,selectUser,invalidateUser} from '../actions'

const mapStateToProps = state=>{
    
    const {selectedUser,repositoriesByUser} = state
    const {isFetching} = repositoriesByUser[selectedUser] 
    || { isFetching:false,repositories:[]}
 

    return {
        value:state.selectedUser,
        isFetching:isFetching
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        userOnChange:user=>{
            dispatch(selectUser(user))
            dispatch(fetchPostIfNeeded(user))
        },
        refreshOnClick:(user)=>{
            dispatch(invalidateUser(user))
            dispatch(fetchPostIfNeeded(user))
        }
    }
}

const UserSelectContainer = connect(mapStateToProps,mapDispatchToProps)(UserSelect)

export default UserSelectContainer
