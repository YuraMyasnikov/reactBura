import React, {Component} from "react";
import './btn-filter.css'

export default class BtnFilter extends Component {


    buttons = [
        {name:'Все',code:'all'},
        {name:'Важные',code:'important'},
        {name:'Готовые',code:'done'}
    ]

    render() {

        const {filter, onClickFilter} = this.props

        const buttons = this.buttons.map( ({name,code})=> {
            console.log(filter)
            const isActive = filter === code
            const clazz = isActive? 'btn-info':'btn-outline-info'
            return(
                <button
                    key={code}
                    className={`btn ${clazz}`}
                    type={"button"}
                    onClick={ () => onClickFilter(code) }
                > {name} </button>
            )
        } )

        return(

            <div className="btn-group">
                {buttons}
            </div>

        )


    }

}