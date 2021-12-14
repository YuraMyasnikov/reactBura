import React from "react";
import './title.css'

const Title = ({totalCount,doneCount, todoCount}) => {
    return(
        <div className='row'>
            <h1 className='col'>Zagolovok</h1>
            <span className='info d-flex'>
                <span className='status text-primary'>&nbsp; всего: {totalCount}</span>,
                <span className='status text-success'>&nbsp; готовы: {doneCount}</span>,
                <span className=' status text-info'>&nbsp; осталось сделать {todoCount}.</span>
            </span>
        </div>
    )
}

export default Title