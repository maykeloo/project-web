/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../../images/logo.svg'
import img from '../../../images/img-header.webp'
import numbers from '../../../images/img-header-numbers.svg'


const Navbar = () => {
    return (
        <div className='d-flex flex-column header flex-sm-row'>
            <div className='img-left-cont d-flex align-items-center'>
                <img className="left-img"  src={logo} alt="Logo" />
            </div>
            <div className='d-flex flex-column align-items-end w-100'>
                <nav className=' d-none d-sm-flex border-bottom flex-nowrap nav justify-content-between mt-1 p-0'>
                    <a className='text-link active pb-1' href="#">STARTSEITE</a>
                    <a className='text-link text-danger text-nowrap pb-1' href="#">GARAGEN & GARAGENTOR KONFIGURATOR</a>
                    <a className='text-link pb-1' href="#">INFO+</a>
                    <a className='text-link pb-1' href="#">KONTAKT</a>
                </nav>
                <div className='d-flex gap-3 mt-3 text-dark align-items-center justify-content-between justify-content-sm-end'>
                    <img className='img-1' src={img} alt="" />
                    <img className='img-2' src={numbers} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
