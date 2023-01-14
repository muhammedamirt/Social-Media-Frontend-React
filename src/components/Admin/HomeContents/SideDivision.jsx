import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const SideDivision = () => {
  return (
    <div className=' flex md:grid md:grid-cols-1 gap-2 justify-between md:w-1/4 bg-snow-drift-50 shadow-sm shadow-heavy-metal-700 rounded-md py-2 px-2'>
      <div className='bg-snow-drift-50 shadow-md rounded shadow-heavy-metal-300  w-full text-center pt-3'>
        <h3 className='font-bold text-2xl underline'>users</h3>
        <div className='flex justify-between px-4 py-3'>
          <p className='font-bold'>100k</p>
          <span>
            <ArrowDropDownCircleIcon />
          </span>
        </div>
      </div>
      <div className='bg-snow-drift-50 shadow-md rounded shadow-heavy-metal-300  w-full text-center pt-3'>
        <h3 className='font-bold text-2xl underline'>users</h3>
        <div className='flex justify-between px-4 py-3'>
          <p className='font-bold'>100k</p>
          <span>
            <ArrowDropDownCircleIcon className='text-red-600' />
          </span>
        </div>
      </div>
      <div className='bg-snow-drift-50 shadow-md rounded shadow-heavy-metal-300  w-full text-center pt-3'>
        <h3 className='font-bold text-2xl underline'>users</h3>
        <div className='flex justify-between px-4 py-3'>
          <p className='font-bold'>100k</p>
          <span>
            <ArrowDropDownCircleIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SideDivision