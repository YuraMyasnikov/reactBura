import React, {Component} from "react";
import Title from "../title/title";
import List from "../list/list";
import SearchPanel from "../search-panel/search-panel";
import AddPanel from "../add-panel";

export default class App extends Component{

    maxInd = 100;
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

    addItem = (text) => {
        this.setState( ({itemData})=>{
            const added = {label: text, id: this.maxInd++ }

            return{
                itemData: [...itemData, added]
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
                < AddPanel app={this.addItem} />
            </div>
        )

    }

}