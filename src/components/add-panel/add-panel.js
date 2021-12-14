import React, {Component} from "react";
import './add-panel.css'
import AddBtn from "./add-btn/";
import AddInput from "./add-input/";

export default class AddPanel extends Component{

    render() {
        const {add} = this.props

        const addPanel = ()=>{
            console.log(add('new Item'))
        }

        return(
            <form className="d-flex addPanel">
                <AddInput/>
                <AddBtn add={addPanel}/>
            </form>
        )

    }

}