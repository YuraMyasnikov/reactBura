import React, {Component} from "react";
import Title from "../title/";
import List from "../list/";
import AddPanel from "../add-panel/";
import SearchPanel from "../search-panel/";

export default class App extends Component{

    id = 100;

    state = {
        itemData : [
            this.item('Yura',true),
            this.item('Lena'),
            this.item('Roma', true,true),
            this.item('Vika',true, true),
            this.item('Ira', false,true),
        ],
        searchValue: '',
        filter: ''
    }

    item (label,done=false, important=false) {
        return{
            label,
            id:this.id++,
            done,
            important
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
    toggleProp = (arr, id, prop) => {
        const idx = arr.findIndex( (el)=> el.id === id )
        const oldItem = arr[idx]
        const newItem = {...oldItem, [prop]:!oldItem[prop]}

        const before = arr.slice(0, idx)
        const after = arr.slice(idx + 1)
        const newArray = [...before, newItem, ...after]

        return newArray
    }
    clickImportant = (id) => {
        this.setState( ({itemData})=>{
            return {
                itemData: this.toggleProp(itemData, id, 'important')
            }
        } )
    }

    onSearch = (items,val) =>{
        if(val === ''){
            return items
        }
        const renderItems = items.filter( (item)=>{
            return item.label.toLowerCase().indexOf(val.toLowerCase()) > -1
        } )
        return renderItems
    }
    onSearchValue = (val)=>{
        this.setState( ({searchValue})=>{
            return {
                searchValue:val
            }
        } )
    }

    onFilter = (items,filter)=>{
        switch (filter) {
            case 'all':
                return items;
            case 'important':
                return items.filter( (item)=>!item.done);
            case 'done':
                return items.filter( (item)=>item.done )
            default:
                return items
        }
    }
    onClickFilter = (filter)=>{
     /* this.setState(({filter})=>{
          return {
              filter:filter
          }
      })*/
    }


    render() {

        const {itemData,searchValue, filter} = this.state

        this.onClickFilter()

        const totalCount = this.state.itemData.length
        const doneCount = itemData.filter( (el) => el.done === true ).length
        const todoCount = totalCount - doneCount

        const onSearchValue = this.onSearchValue

        return(
            <div className="container">

                {filter} {this.onClickFilter()}

                < Title totalCount={totalCount} doneCount={doneCount} todoCount={todoCount}/>
                < SearchPanel onSearchValue={onSearchValue} filter={filter} onClickFilter={this.onClickFilter}/>
                < List data={this.onFilter(this.onSearch(itemData, searchValue),filter)} deleted={ this.deleteItem } done={this.clickDone} important={this.clickImportant}/>
                < AddPanel add={this.addItem}/>

            </div>
        )

    }

}