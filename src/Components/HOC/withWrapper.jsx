import React from 'react'
// using with wrapper
export default function withWrapper(Component) {
  return (props)=>(
    <div className='w-[1110px] max-w-[calc(100%-30px)] mx-auto'>
      <Component {...props}/>
    </div>
    
  )
}
