import React from 'react'
import UserSelectContainer from '../containers/UserSelectContainer';
import RepositoryListContainer from '../containers/RepositoryListContainer';

const FetchApp = ()=>(
    <div>
        <p>App</p>
        <UserSelectContainer options={['octocat','octokit']} />
        <RepositoryListContainer />
    </div>
)

export default FetchApp