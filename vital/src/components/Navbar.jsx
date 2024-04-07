import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
const [open, setOpen] = useState(false)

const handleOpen = () => {
    setOpen(!open)
}

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 justify-between items-center max-w[1240px] h-20 mx-6 px-auto'>
        <div className='' onClick={handleOpen}>
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        
        </div>
        <input placeholder='Search name or ID' className='rounded-lg w-80 h-5 px-1 py-4 hidden lg:block' />
        <h2 className='text-white font-semibold text-xl '>MORE THAN A SCHOOL, A FAMILY</h2>
    </div>
  )
}

export default Navbar