import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black' >
      <img className='w-56' src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' />
      <div className='flex items-center'>
        <IoIosArrowDropdown color='white' size={"24px"}></IoIosArrowDropdown>
        <h1 className='text-lg font-medium text-white'>Sumit Kumar</h1>
        <div className='ml-4'>
        <button className='bg-red-800 text-white px-4 py-2'>LogOut</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
      </div>
    </div>
  )
}
