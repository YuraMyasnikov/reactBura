import React from "react";
import './search-panel.css'

import Search from "./search/search";
import BtnFilter from "./btn-filter/btn-filter";

const SearchPanel = () => {
    return(
        <div className="row">
            <div className="searchPanel">
                < Search /> < BtnFilter/>
            </div>
        </div>
    )
}

export default SearchPanel