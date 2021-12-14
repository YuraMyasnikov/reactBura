import React,{ Component } from "react";
import './list-item.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class ListItem extends Component {

    render() {
        const {label, onDeleted, onDone, done, important} = this.props

      let BtnsClasses = 'parent'
        if(done){

            BtnsClasses += ' success'
        }
        if(important){
            BtnsClasses += ' primary'
        }


        const Btn = ()=>{
            return(
                <span className='child'>
                <button onClick={onDeleted} className='list-btn btn btn-danger' >
                    < FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={this.onClickPrimary} className='list-btn btn btn-primary' > < FontAwesomeIcon icon={faExclamation} /> </button>
                <button onClick={onDone} className='list-btn btn btn-success' > < FontAwesomeIcon icon={faCheck} /> </button>
            </span>
            )
        }

        return  <span className={ BtnsClasses } onClick={this.onLabelClick}  > {label} < Btn /> </span>

    }

}