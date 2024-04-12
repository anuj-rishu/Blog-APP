import React, { useContext } from 'react'
import { Appcontext } from '../Context/AppContext'

const Pagination = () => {
const {page, handlePageChange , totalPages}= useContext(Appcontext);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ' >
      <div className='flex justify-between w-11/12 max-w-[670] py-2' >
        
        <div className='flex gap-x-2 justify-center w-full'>
        { page > 1 &&
          ( <button
            className='bg-blue-500 hover:bg-blue-700 text-white border-2 py-1 px-4 rounded-md'
            onClick={()=>handlePageChange (page-1) }  > 
            Previous     
            </button>)
        }
        {
          page< totalPages && 
          (
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white border-2 py-1 px-4 rounded-md'
              onClick={()=> handlePageChange(page+1)} >
              Next
            </button>
          )
        }


<div>
<p className=' ml-[100px] font-bold text-sm   '>
          Page {page} of {totalPages}
        </p>
</div>
       
        </div>

        
      </div>
    </div>
  )
}

export default Pagination