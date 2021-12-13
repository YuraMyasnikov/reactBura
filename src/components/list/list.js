import React from "react";
import ListItem from "../list-item/list-item";

const List = ({data,deleted}) => {

    const elements = data.map( (el)=>{
        const {id} = el
        const className = `list-group-item ${id}`
        return(
            <li key={id} className={className} >
                <ListItem
                    {...el}
                    onDeleted={ () => deleted(id) }
                />`
            </li>
        )
    } )

    return(
        <ul className=" list-group">
            {elements}
        </ul>
    )
}

export default List