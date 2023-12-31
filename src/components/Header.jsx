import React, {useState,useContext } from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'

import ytLogo from "../images/yt-logo.png"
import ytLogoMoblie from "../images/yt-logo-mobile.png"
import profile from "../images/user.png"


import {SlMenu} from "react-icons/sl"
import {IoIosSearch} from "react-icons/io"
import {RiVideoAddLine} from "react-icons/ri"
import {FiBell} from "react-icons/fi"
import {CgClose} from "react-icons/cg"

import { context } from '../context/contextApi'
import Loader from '../shared/Loader'


const Header = () => {

      const [searchQuery, setSearchQuery ] = useState("")

      const {loading, mobileMenu , setMobileMenu } = useContext(context)

      const navigate = useNavigate()

      const searchQueryHandler = (event) => {
        if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length >0 ) {

          navigate (`/searchResult/${searchQuery}`)
        }
      }
      
      const moblieMenuToggle =() => {
        setMobileMenu(!mobileMenu)
      }

      const {pathname} = useLocation()

      const pageName = pathname?.split("/")?.filter(Boolean)?.[0]


  return (
    <div className="sticky-0 flex z-10 flex-col items-center justify-between h-14 top-0 px-4 md:px-5 bg-black">
      {loading && <Loader /> }

      <div className="flex h-5 items-center justify-between w-full mt-4 ">
        <div className='flex flex-row items-center justify-center'>
        {pageName !== 'vedio' && (
          <div className="flex md:hidden md:mr-6 cursor-pointer itmes-center justify-center mt-4 h-10 w-10 rounded full hover:bg-[#303030]/[0.6]"
               onClick={moblieMenuToggle}
          >
              {mobileMenu ? (<CgClose className="text-xl text-white" />) : (<SlMenu className="text-xl text-white" />)}
          </div>

        )}
        <Link to="/" className="flex h-5 items-center ml-1">
          <img src={ytLogo} alt="Youtube" className='h-full hidden md:block ' />
          <img src={ytLogoMoblie} alt="Youtube" className='h-full md:hidden ' />
        </Link>
        </div>

        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#3d3d3d] rounded-3xl group-focus-within:hover:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0  ">
              <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                 <IoIosSearch className='text-white text-xl ' />
              </div>
              <input type="text" 
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] " 
              onChange={(e) => setSearchQuery(e.target.value)} 
              onKeyUp={searchQueryHandler} 
              value={searchQuery} />
              
          </div>
          <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border-l-0 border-[#3d3d3d] rounded-r-3xl bg-white/[0.1]'>
                <IoIosSearch 
                  className='text-white text-xl '
                />
              </button>
        </div>
        <div className="flex">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#3d3d3d]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer " />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#3d3d3d]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer " />
            </div>
          </div>
          <div className="flex w-8 h-8 items-center pt-[4px] rounded-full overflow-hidden md:ml-4  hover:bg-[#3d3d3d]/[0.6] ">
              <img src={profile} alt="" className='w-[30px]' />
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header


