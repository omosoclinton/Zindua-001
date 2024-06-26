import React from 'react'
import Form from './Form.jsx'

function Modal (){
    return (
        <>
            {/* Button Trigger Modal */}
            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
                Add A House
            </button>
            {/* Modal*/}
            <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false'  tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered'>
                    <div class='modal-content'>
                        <div class='modal-content'>
                            <h1 className='modal-title fs-5' id='staticBackdropLabel'>Add a house</h1>
                            <button type="button" className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <Form/>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal