import React, {Component} from "react";
import './add-panel.css'

export default class AddPanel extends Component{

    state = {
        label:''
    }

    render() {

        const {add} = this.props

        const changeInput = (e)=>{
            this.setState( {
                label:e.target.value
            } )

        }


        const submit = (e) => {
            e.preventDefault()
            if(this.state.label !== ''){
                add(this.state.label)
                this.state.label=''
            }



        }
        return(
            <form className="formAdd d-flex" onSubmit={submit}>
                <input className="inputAdd form-control" type="text" placeholder="добавить" onChange={changeInput} value={this.state.label}/>
                <button className="btn btn-outline-primary">добавить</button>
            </form>
        )
    }
}

