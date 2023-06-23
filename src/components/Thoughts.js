import React from 'react'

const Thoughts = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-auto mb-2 px-4 pb-4 w-[12.875rem] rounded-[16px] bg-[#F5F5F5] mt-4'>
        <div className='flex items-center justify-center rounded-full w-[4.125rem] h-[4.125rem] bg-[#F5F5F5] absolute translate-y-[-50%]  left-[80px]'>
            <img src="images/lamp-on.svg"/>
        </div>
        <span className='mt-8 text-[0.875rem] font-medium'>Thoughts Time</span>
        <span className='text-[0.75rem] text-[#787486]'>We don’t have any notice for you, till then you can share your thoughts with your peers.</span>
        <button className='bg-white rounded-lg py-2 px-4 text-[0.875rem] font-medium text-black'>Write a mesasge</button>
    </div>
  )
}

export default Thoughts