import React,{ Component } from "react";
import './list-item.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class ListItem extends Component {

    state =  {
        primary: false,
        success: false
    }

    onClickPrimary = () => {
        this.setState( ({primary})=>{
            return{
                primary: !primary
            }
        } )
    }
    onClickSuccess = () => {
        this.setState( (state)=>{
            return{
                success: !this.state.success
            }
        } )
    }

    render() {
        const {label, onDeleted} = this.props
        const {important} = this.state

        let BtnsClasses = 'parent'
        if(this.state.success){
            BtnsClasses += ' success'
        }
        if(this.state.primary){
            BtnsClasses += ' primary'
        }


        const Btn = ()=>{
            return(
                <span className='child'>
                <button onClick={onDeleted} className='list-btn btn btn-danger' >
                    < FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={this.onClickPrimary} className='list-btn btn btn-primary' > < FontAwesomeIcon icon={faExclamation} /> </button>
                <button onClick={this.onClickSuccess} className='list-btn btn btn-success' > < FontAwesomeIcon icon={faCheck} /> </button>
            </span>
            )
        }

        return  <span className={ BtnsClasses } onClick={this.onLabelClick}  > {label} < Btn /> </span>

    }

}