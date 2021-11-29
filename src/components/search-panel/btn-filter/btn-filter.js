import React, {Component} from "react";
import './btn-filter.css'

export default class BtnFilter extends Component {

    render() {
        return (
            <div className="btnFilter">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={ ()=>{console.log('dfgdfg')} } type="button" className="btn btn-secondary"> Все </button>
                    <button type="button" className="btn btn-secondary"> Важные </button>
                    <button type="button" className="btn btn-secondary"> Готово </button>
                </div>
            </div>
        )
    }

}
