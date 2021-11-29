import React from "react";
import './title.css'

const Title = () => {
    return(
        <div className='row'>
            <h1 className='col'>Zagolovok</h1>
            <span className='info col'>
                В списке <span className='status text-danger'>&nbsp; * важных</span>, <span className=' status text-success'>&nbsp; * готово.</span>
            </span>
        </div>
    )
}

export default Title