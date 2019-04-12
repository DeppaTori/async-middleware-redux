import React,{Component} from 'react'

class UserSelect extends Component{
  

    render(){
        const {value,options,userOnChange} = this.props
        return(
            <div>
            <h1>{value}</h1>
            <select value={value} onChange={e=>userOnChange(e.target.value)}>
                {
                    options.map((option)=>(
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
            </div>
        )
    }
  
}



export default UserSelect