import React from 'react'
import Icon from '../Images/Icon.svg'
import withWrapper from '../HOC/withWrapper'
import Landing2 from '../Images/Landing2.svg'


function ParagraphSnd() {
  return (
    <div className='mx-auto flex'>
      <div className='w-[255px] h-[138px]' >
        <p className='roboto-medium text-[#091133] text-[36px] w-[540px] h-[48px] mb-[16px]'>
        Light, Fast & Powerful
        </p>
        <p className='roboto-regular text-[#6F7CB2] text-[16px] w-[540px] h-[140px]'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div>
            <div className='flex'>
                <div className='mr-[30px]'>
                <img src={Icon} alt='Icon'></img>
                <p className='roboto-medium text-[16px] text-[#091133] mt-[14px] mb-[6px]'>
                Title Goes Here
                </p>
                <p className='roboto-regular text-[#5D6970] text-[12px] w-[255px] h-[45px]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </p>
                </div>
                <div>
                <img src={Icon} alt='Icon'></img>
                <p className='roboto-medium text-[16px] text-[#091133] mt-[14px] mb-[6px]'>
                Title Goes Here
                </p>
                <p className='roboto-regular text-[#5D6970] text-[12px] w-[255px] h-[45px]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </p>
                </div>
            </div>
            <div>
            
            </div>
        </div>
      </div>
      <div className='w-[540px] h-[524.31px] ml-[400px]'>
        <img src={Landing2} alt='Woman'></img>
      </div>
    </div>
    
  )
}
const WrappedPs = withWrapper(ParagraphSnd)
export default WrappedPs