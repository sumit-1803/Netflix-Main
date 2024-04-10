import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";

export default function VideoTitle() {
  return (
    <div className='absolute aspect-video text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold' >Marvel Universe</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className='flex mt-8'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
            <IoMdPlay size="24px"></IoMdPlay>
            <span className='ml-1'>Play</span>
        </button>
        <button className='flex items-center px-6 py-2 mx-3 bg-neutral-700 text-white rounded-md hover:bg-opacity-80'>
            <BsInfoCircle size="24px"></BsInfoCircle>
            <span className='ml-1'>Watch More</span>
            </button>
      </div>
    </div>
  )
}
