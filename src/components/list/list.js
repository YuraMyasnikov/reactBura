import React from "react";
import ListItem from "../list-item/";

const List = ({data,deleted,done}) => {

    const elements = data.map( (el)=>{
        const {id} = el
        return(
            <li key={id} className="list-group-item">
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