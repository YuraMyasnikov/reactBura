import React, {Component} from "react";
import Title from "../title/title";
import List from "../list/list";
import SearchPanel from "../search-panel/search-panel";

export default class App extends Component{

    state = {
        itemData : [
            {label:'Yura', id:'Yu'},
            {label:'Lena', id:'Le'},
            {label:'Roma', id:'Ro'},
            {label:'Vika', id:'Vi'},
        ]
    }

    deleteItem = (id) => {
        this.setState( ( {itemData} )=>{
            const idx =  itemData.findIndex( (el)=>{
                return el.id === id
            } )

            const before = itemData.slice( 0,idx );
            const after = itemData.slice( idx+1 );

            const final = [...before, ...after];

            return {
                itemData : final
            }


        } )
    }



    render() {

        const {itemData} = this.state

        return(
            <div className="container">
                <Title />
                <SearchPanel />
                <List data={itemData} deleted={ this.deleteItem }/>
            </div>
        )

    }

}