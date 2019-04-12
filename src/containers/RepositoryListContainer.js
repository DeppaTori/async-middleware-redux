import {connect} from 'react-redux'
import RepositoryList from '../components/RepositoryList';

const mapStateToProps = state =>{

    const {selectedUser,repositoriesByUser} = state
    const {isFetching,lastUpdated,repositories} = repositoriesByUser[selectedUser] 
    || { isFetching:true,repositories:[]}
 
    return {
        selectedUser,
        repositories,
        isFetching,
        lastUpdated
    }
}

const RepositoryListContainer = connect(mapStateToProps)(RepositoryList)

export default RepositoryListContainer