import { Bookmark } from 'lucide-react'
import React from 'react'

const Tutorial = ({ brandLogo, companyName, datePosted, post, tag1, tag2, pay, location }) => {
  return (
    <div className='h-[330px] w-[280px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md'>
      
      {/* Top Section */}
      <div>
        <div className='flex items-start justify-between mb-6'>
          <img 
            className='h-10 w-10 rounded-xl p-1 border border-amber-200' 
            src={brandLogo} 
            alt="logo" 
          />
          <button className='flex items-center gap-2 text-purple-600'>
            Save <Bookmark size={18} />
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className='text-lg font-semibold'>
            {companyName} 
            <span className='text-sm text-amber-600 ml-2'>{datePosted}</span>
          </h3>

          <h2 className='font-medium text-base mt-1'>{post}</h2>

          <div className='flex gap-2 mt-3'>
            <h4 className='text-sm bg-gray-100 px-2 py-1 rounded'>{tag1}</h4>
            <h4 className='text-sm bg-gray-100 px-2 py-1 rounded'>{tag2}</h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between border-t pt-3">
        <h3 className='text-sm font-medium'>{pay}</h3>
        <p className='text-sm text-gray-500'>{location}</p>
      </div>

    </div>
  )
}

export default Tutorial