import React,{Component} from 'react'

class RepositoryList extends Component{
    render(){
        const {repositories} = this.props
        return (
            <ul>
                {repositories.map(repository=>(
                    <li key={repository.id}>{repository.name}</li>
                ))}
            </ul>
        )
    }
}

export default RepositoryList