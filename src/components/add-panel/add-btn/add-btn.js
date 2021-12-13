import React, { Component } from "react";
import './add-btn.css'

export default class AddBtn extends Component {

    render() {

        const btnZone = ()=>{
            this.props.panel('Yu zona')
        }

        return(
            <button onClick={btnZone} type="button" className="add btn btn-outline-secondary">Добавить</button>
        )

    }

}