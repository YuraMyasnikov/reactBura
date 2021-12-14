import React, {Component} from "react";
import Title from "../title/";
import List from "../list/";
import AddPanel from "../add-panel/";
import SearchPanel from "../search-panel/";

export default class App extends Component{

    id = 100;

    state = {
        itemData : [
            this.item('Yura'),
            this.item('Lena'),
            this.item('Roma'),
            this.item('Vika'),
            this.item('Ira'),
        ]
    }

    item (label) {
        return{
            label,
            id:this.id++,
            done:false,
            important:false
        }
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
        const newItem = this.item(text)
        this.setState( ({itemData})=>{
            const newArr = [newItem, ...itemData];
            return { itemData:newArr }
        } )
    }

    clickDone = (id) => {
        this.setState( ( {itemData} )=>{
           const idx = itemData.findIndex( (el)=> el.id === id )
           const oldItem = itemData[idx]
           const newItem = {...oldItem, done:!oldItem.done}

           const before = itemData.slice(0, idx)
           const after = itemData.slice(idx + 1)
           const newArray = [...before, newItem, ...after]

           return{
               itemData : newArray
           }
        } )
    }

    render() {
        const {itemData} = this.state

        const totalCount = this.state.itemData.length
        const doneCount = itemData.filter( (el) => el.done === true ).length
        const todoCount = totalCount - doneCount

        return(
            <div className="container">

                < Title totalCount={totalCount} doneCount={doneCount} todoCount={todoCount}/>
                < SearchPanel />
                < List data={itemData} deleted={ this.deleteItem } done={this.clickDone}/>
                < AddPanel add={this.addItem}/>

            </div>
        )

    }

}