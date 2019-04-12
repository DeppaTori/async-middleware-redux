import React,{Component} from 'react'

class UserSelect extends Component{
  

    render(){
        const {value,options,userOnChange,refreshOnClick,isFetching} = this.props
        return(
            <div>
            <h1>{value}</h1>
            <button onClick={e=>{
                e.preventDefault()
                refreshOnClick(value)
            }}>Refresh</button>
            <select value={value} onChange={e=>userOnChange(e.target.value)}>
                {
                    options.map((option)=>(
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
            <span>{isFetching?"Loading...":""}</span>
            
            </div>
        )
    }
  
}



export default UserSelect