import React, { Component } from "react";
import './add-panel.css'
import AddBtn from "./add-btn/add-btn";
import AddArea from "./add-area/add-area";

export default class AddPanel extends Component {

    render() {

        const panelFun = (text) => {
            this.props.app(`${text}`)
        }

        return(
            <div className="addPanel">
                < AddArea />
                < AddBtn panel={panelFun}/>
            </div>
        )

    }

}
