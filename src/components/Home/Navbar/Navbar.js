/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        <div className='d-flex flex-column header flex-sm-row'>
            <div className='img-left-cont d-flex align-items-center'>
                <img className="left-img"  src="https://www.baudiscount-garagen.de/images/logo.svg" alt="Logo" />
            </div>
            <div className='d-flex flex-column align-items-end w-100'>
                <nav className=' d-none d-sm-flex border-bottom flex-nowrap nav justify-content-between mt-1 p-0'>
                    <a className='text-link active pb-1' href="#">STARTSEITE</a>
                    <a className='text-link text-danger text-nowrap pb-1' href="#">GARAGEN & GARAGENTOR KONFIGURATOR</a>
                    <a className='text-link pb-1' href="#">INFO+</a>
                    <a className='text-link pb-1' href="#">KONTAKT</a>
                </nav>
                <div className='d-flex gap-3 mt-3 text-dark align-items-center justify-content-between justify-content-sm-end'>
                    <img className='img-1' src="https://www.baudiscount-garagen.de/images/tuv2.jpg" alt="" />
                    <img className='img-2' src="https://www.baudiscount-garagen.de/images/open-hours.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
