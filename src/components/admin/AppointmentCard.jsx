import React from 'react'

function AppointmentCard() {
    return (
        <>
            <div className=" w-150 h-70 shadow-2xl rounded-xl m-10">
                <div className="card-body ">
                    <div className='flex'>
                        <div>
                            <img src="public/avatar1.jpg" alt="Shopimage" className=" w-40 h-40 rounded-full my-0 mx-2" />

                        </div>
                   
                    <div className='m-5 gap-2'>
                        <h2 className="card-title text-lg font-semibold">Will Smith</h2>
                        <p className="gap-10 text-sm text-gray-600">Address: 111/11 Sukhumvit road, Pathumwan, Bangkok</p>
                        <p className="text-sm text-gray-600">Date : 13/06/2025</p>
                        <p className="text-sm text-gray-600">Time : 10:00-11:00</p>
                        <p className="text-sm text-red-600">**Please arrive on time**</p>
                    </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentCard