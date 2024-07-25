import React from 'react'
import withWrapper from '../HOC/withWrapper'

function Navbar() {
  return (
    <nav className='flex gap-[271px] m-auto items-center my-[18px]'>
      <ul className='flex gap-[60px]'>
       <li><a href="" className='roboto-regular text-[14px] text-[#505F98]'> Home </a></li>
       <li><a href="" className='roboto-regular text-[14px] text-[#505F98]'> About </a></li>
       <li><a href="" className='roboto-regular text-[14px] text-[#505F98]'> Contact </a></li>
      </ul>
      <div className='flex'>
        <a href="" className='roboto-black text-[26px] text-[#37447E]'>Landing</a>
      </div>
      <button className='roboto-medium text-[12px] bg-[#111B47] text-white w-[126px] h-[26px] rounded'>Buy now</button>
      
    </nav>
  )
}
const WrappedNavbar = withWrapper(Navbar);
export default WrappedNavbar

