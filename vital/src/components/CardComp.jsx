import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCross, faDroplet, faEnvelope, faHeart, faHeartCircleCheck, faHeartCircleExclamation, faHeartbeat, faHippo, faHospitalSymbol, faMedkit, faPercentage, faTemperature0, faTemperature1} from "@fortawesome/free-solid-svg-icons";
import { FaHeartCircleCheck } from 'react-icons/fa6';



function CardComp() {
  return (
    <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
        <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Temperature</h2>
          <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faTemperature1}/> 38.5 °C</p>
          
          <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Temperature</button>
          
        </div>

        <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Pulse Oximeter</h2>
          <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faHeartbeat}/> 74 /min</p>
          <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faPercentage}/> 98 SPo2</p>
          <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Pulse Count</button>
        </div>

        <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Blood Pressure</h2>
          <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faHeart}/> 120</p>
          <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faDroplet}/> 90</p>
          <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Blood Pressure</button>
        </div>
    </div>
  )
}

export default CardComp