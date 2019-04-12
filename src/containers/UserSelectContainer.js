import React from 'react'
import UserSelect from '../components/UserSelect'
import {connect} from 'react-redux'
import {fetchPostIfNeeded,selectUser} from '../actions'



const mapDispatchToProps = dispatch =>{
    return {
        userOnChange:user=>{
            dispatch(selectUser(user))
            dispatch(fetchPostIfNeeded(user))
        }
    }
}

const UserSelectContainer = connect(null,mapDispatchToProps)(UserSelect)

export default UserSelectContainer
