import React from 'react'
import Modal from './Modal.jsx'

function NavBar () {
    return (
        <>
            <nav className='navbar updatedNav'>
                <div className='container-fluid'>
                    <a href="" className='nav-brand'>PataNyumba</a>
                    <Modal/>
                    <form action="" className='d-flex' role='search'>
                        <input type="search" className='form-control me-2' placeholder='Search' aria-label='Search'/>
                        <button className='btn btn-outline-success' type='submit'>Serch</button>
                    </form>
                </div>
            </nav>
        </>
    )
}


export default NavBar