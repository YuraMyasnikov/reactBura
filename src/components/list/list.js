import React from "react";
import ListItem from "../list-item/";

const List = ({data,deleted,done}) => {

    const elements = data.map( (el)=>{
        const {id} = el
        const className = `list-group-item ${id}`
        return(
            <li key={id} className={className} >
                <ListItem
                    {...el}
                    onDeleted={ () => deleted(id) }

                    onDone={ () => done(id)}
                />

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