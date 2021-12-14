import React, {Component} from "react";
import './add-btn.css'

export default class AddBtn extends Component {

    render() {
    const {add} = this.props

        const addBtn = () => {
           return add()
        }

        return(
            <button onClick={addBtn} type="button" className="btn btn-outline-secondary addBtn">Добавить</button>
        )

    }

}