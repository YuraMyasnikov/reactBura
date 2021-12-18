import React, {Component} from "react";
import './search-panel.css'
import Search from "./search/";
import BtnFilter from "./btn-filter/";

export default class SearchPanel extends Component{

    render() {

        const{onSearchValue} = this.props


        return(
            <div className="searchPanel d-flex justify-content-between">
                < Search onSearchValue={onSearchValue}/>
                < BtnFilter />
            </div>
        )

    }

}