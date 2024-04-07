import React from 'react'

function MainComp() {
  return (
    <div className='bg-[#f29d0a] p-4 w-full'>
        <h2 className='text-[#201261] mb-5 font-bold text-2xl pb-3 md:text-3xl'>VITAL SIGNS READINGS</h2>
        <div className='grid lg:grid-cols-3' >
        <div>
            
            <h6>Name: <span className='font-semibold text-[#201261]'>Juan Dela Cruz</span></h6>
            <h6>Age: <span className='font-semibold text-[#201261]'>22</span></h6>
        </div>
        <div>
        <h6>Birthdate: <span className='font-semibold text-[#201261]'>Birthdate</span></h6>
            <h6>Gender: <span className='font-semibold text-[#201261]'>Male</span></h6>
        </div>
        <div>
            <h3 className='font-bold text-[#201261]'>Dr. Nick Alvarez</h3>
            <h6 className='text-gray-500'>Checked By</h6>
        </div>
        </div>


    </div>
  )
}

export default MainComp