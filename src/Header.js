import React from 'react'
import './Header.css'

import { AiOutlineSearch } from "react-icons/ai";
import { RiEarthFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";

function Header() {
  return (
    <div className='header'>
            <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />

            <div className='header-center'>
                <input type="text" name=""/>
                < AiOutlineSearch className='seach_icon'/>
            </div>

            <div className='header_right'>
                <h5>Become a host</h5>
                <RiEarthFill />
                <IoIosArrowDown />
                <FcBusinessman className="bisnas_man"/>
            </div>
    </div>
  )
}

export default Header