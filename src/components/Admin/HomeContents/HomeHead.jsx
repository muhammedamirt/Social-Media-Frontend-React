import React from 'react'

const HomeHead = () => {
  return (
    <div className='flex justify-between w-full bg-snow-drift-400 h-24 rounded-sm py-5 px-6'>
    <div>
        <h1 className='font-bold text-2xl text-snow-drift-50'>Dashboard</h1>
    </div>
    <div>
        <button className='border py-1 px-4 rounded-md bg-snow-drift-50 text-snow-drift-900 font-bold hover:animate-pulse'>
            create report
        </button>
    </div>
</div>
  )
}

export default HomeHead