import React from 'react'

function Form () {
    return (
        <>
            <form action="">
                <div className='mb-3'>
                    <label for='exampleInputEmail' className='form-label' htmlFor="">Size</label>
                    <input type="text"  className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'/>
                </div>
                <div className='mb-3'>
                    <label for='exampleInputEmail' className='form-label' htmlFor="">Price</label>
                    <input type="text"  className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'/>
                </div>
                <div className='mb-3'>
                    <label for='exampleInputEmail' className='form-label' htmlFor="">Add House</label>
                    <input type="text"  className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'/>
                </div>
                <button type="button" className='btn btn-primary'>Submit</button>
            </form>
        </>
    )
}

export default Form