import React from 'react'
import withWrapper from '../HOC/withWrapper'
function Paragraph() {
  //ml-[163.12px]
  return (
    <div className='roboto-medium mt-[303px] w-[539.37px] h-[421] mx-auto'>
        <p className='flex text-[50px] text-[#091133] w-[539px] h-[132px]'>
        Introduce Your Product Quickly & Effectively
        </p>
        <p className='roboto-regular text-[#505F98] text-[18px] h-[164px] mt-[20px]'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus     
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <button className='roboto-medium bg-[#111B47] text-[16px] text-white w-[189.13px] h-[36px] mr-[30px]'>Purchase UI Kit</button> <button className='roboto-medium border-[#091133] border-2 w-[189.13px] h-[36px]'>Learn More</button>
    </div>
  )
}

const WrappedP = withWrapper(Paragraph)
export default WrappedP