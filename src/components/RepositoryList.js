import React,{Component} from 'react'

class RepositoryList extends Component{
    render(){
        const {repositories,isFetching} = this.props
        return (
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <ul>
                    {repositories.map(repository=>(
                        <li key={repository.id}>{repository.name}</li>
                    ))}
                </ul>
            </div>
            
        )
    }
}

export default RepositoryList