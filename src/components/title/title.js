import React from "react";
import './title.css'

const Title = ({all, done, rest}) => {
    return(
        <div className='row'>
            <h1 className='col'>Zagolovok</h1>
            <span className='info d-flex'>
                <span className='status text-primary'>&nbsp; всего: {all}</span>,
                <span className='status text-success'>&nbsp; готовы: {done}</span>,
                <span className=' status text-info'>&nbsp; осталось сделать {rest}.</span>
            </span>
        </div>
    )
}

export default Title