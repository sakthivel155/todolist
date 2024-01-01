import React from 'react';
import image1 from '../assets/image/photo.png';

const Nav = () => {
  return (
    <nav className='h-12 flex items-center justify-between bg-[#455A64]'>
      <div className='ml-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" color="white" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
  <line x1={3} y1={12} x2={21} y2={12}></line>
  <line x1={3} y1={6} x2={21} y2={6}></line>
  <line x1={3} y1={18} x2={21} y2={18}></line>
</svg>
      </div> 

       <div className="flex items-center">
         <p className='text-md font-sans text-white '>SAKTHIVEL</p>
        <img className='w-9 rounded-full m-3' src={image1} alt="avatar" />
       </div>
    </nav>
      )
}

export default Nav