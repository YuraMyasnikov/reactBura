import React, {Component} from "react";
import './search.css'

export default class Search extends Component {


    render() {

    const {onSearchValue} =this.props

    const onChange = (e)=>{
        const inputValue = e.target.value
        onSearchValue(inputValue)
    }

    return(
        <input
            type="text"
            className='form-control search'
            placeholder='найти'
            onChange={onChange}
        />
    )

    }

}