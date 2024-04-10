import React from 'react'

export default function VideoBackground() {
  return (
    <div className='w-screen'>
      {/* <iframe 
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/NHtV0RFhFEM?si=TAWkKBrp6QELjBAI&autoplay=1&mute=1" 
      title="YouTube video player" 
      frameborder="0" 
      allowfullscreen>
      </iframe> */}


      <iframe
       className='w-screen aspect-video'
        src="https://www.youtube.com/embed/rqJDO3TWnac?si=klGwrV_YbfKuNM-G&autoplay=1&mute=1" 
        title="YouTube video player"
        frameborder="0"
        allowfullscreen></iframe>
    </div>
  )
}
