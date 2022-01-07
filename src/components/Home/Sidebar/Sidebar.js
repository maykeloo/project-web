/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { CloseIcon, SidebarBox } from './sidebarElement'

import {SiGooglechat} from 'react-icons/si'
import {BsInfoLg, BsFileEarmarkLock} from 'react-icons/bs'
import {GoStar} from 'react-icons/go'
import {RiFileList3Line} from 'react-icons/ri'


const Sidebar = ({visibility, setVisibility}) => {
    
    return (
        <>
            <SidebarBox visibility={visibility}>
                <div className='closeicon container position-relative d-flex justify-content-end p-3'>
                    <CloseIcon onClick={() => setVisibility(false)}/>
                </div>

                <div className="top container">
                    <h6 className='text-light py-2 m-0'><span className='ms-2'>PRODUKTE</span></h6>
                    <a href="#"><div><p className='link m-0 py-1'>Garagentore</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1'>Turen</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1'>Fertigaraggen</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1'>Gartenhäuser & Nebengebäude</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1'>Trennwandsysteme</p></div></a>
                </div>

                <div className="bottom container mt-5">
                    <h6 className='text-light py-2 m-0'><span className='ms-2'>INFO</span></h6>
                    <a href="#"><div><p className='link m-0 py-1 d-flex gap-2 align-items-center'><SiGooglechat/>Kostenlose Angebotserstellung</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1 d-flex gap-2 align-items-center'><BsInfoLg/>Info +</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1 d-flex gap-2 align-items-center'><GoStar/>Über Uns</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1 d-flex gap-2 align-items-center'><BsFileEarmarkLock/>Impressum</p></div></a>
                    <a href="#"><div><p className='link m-0 py-1 d-flex gap-2 align-items-center'><RiFileList3Line/>AGB</p></div></a>
                </div>
            </SidebarBox>
        </>
    )
}

export default Sidebar
