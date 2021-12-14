import React, {Component} from "react";
import './add-input.css'

export default class AddInput extends Component {

    render() {

        return(
            <input type="text" className="form-control addInput" placeholder="добавь в список"/>
        )

    }

}