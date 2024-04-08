import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig';

function CardComp() {
  const [temperature, setTemperature] = useState(null);
  const [pulse, setPulse] = useState(null);
  const [bloodPressure, setBloodPressure] = useState(null);
  const [oxygen, setOxygen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref('Sensor');
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTemperature(data.Body.toFixed(2));
          setPulse(data.Pulse);
          setBloodPressure(data.BP);
          setOxygen(data.Oxygen);
        }
      });
    };

    fetchData();

    return () => {
      firebase.database().ref('Sensor').off();
    };
  }, []);

  return (
    <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Temperature</h2>
        <p className='text-center text-5xl font-bold text-[#f9c700]'>{temperature} °C</p>
        <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Temperature</button>
      </div>
      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Pulse Oximeter</h2>
        <p className='text-center text-5xl font-bold text-[#f9c700]'>Pulse: {pulse} /min</p>
        <p className='text-center text-5xl font-bold text-[#f9c700]'>Oxygen: {oxygen}</p>
        <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Pulse & Oxygen</button>
      </div>
      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Blood Pressure</h2>
        <p className='text-center text-5xl font-bold text-[#f9c700]'>{bloodPressure}</p>
        <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Blood Pressure</button>
      </div>
    </div>

  );
}

export default CardComp;
