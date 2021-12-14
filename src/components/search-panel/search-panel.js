import React, {Component} from "react";
import './search-panel.css'
import Search from "./search/";
import BtnFilter from "./btn-filter/";

export default class SearchPanel extends Component{

    render() {

        return(
            <div className="searchPanel d-flex justify-content-between">
                < Search />
                < BtnFilter />
            </div>
        )

    }

}