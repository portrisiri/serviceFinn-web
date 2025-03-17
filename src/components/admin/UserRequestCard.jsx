import { Image } from 'lucide-react'
import React from 'react'


function UserRequestCard() {
    return (
        <>
        <div className=" w-150 h-100 shadow-2xl rounded-xl m-10">
            <div className="card-body ">
                <div className='flex'>
                    <div>
                        <img src="public/avatar1.jpg" alt="Shopimage" className=" w-40 h-40 rounded-full my-0 mx-2" />

                    </div>
               
                <div className='m-5 gap-2'>
                    
                    <h2 className="card-title text-lg font-semibold">AAA shop</h2>
                    <p className="gap-10 my-2 text-sm text-gray-600">Address: 56 Sukhumvit road, Pathumwan, Bangkok</p>
                    <p className="text-sm my-2 text-gray-600"></p>
                    <p className="text-sm my-2 text-gray-600">Time : </p>
                    <button
                        className="btn btn-sm  btn-primary mr-2"
                        onClick={() => onAccept(Image.id)}>
                        9:00
                    </button>
                    <button
                        className="btn btn-sm  btn-primary mr-2"
                        onClick={() => onAccept(Image.id)}>
                        13:00
                    </button>
                    <button
                        className="btn btn-sm  btn-primary mr-2"
                        onClick={() => onAccept(Image.id)}>
                        16:00
                    </button>
                    <p className="text-sm text-grey-600 my-2">Job Detail : </p>
                    <input
                                    className="w-full px-10 py-8 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder=""
                                />
                    <button
                        className="btn btn-sm  btn-primary mr-2 my-2"
                        onClick={() => onAccept(Image.id)}>
                        Image on site
                    </button>
                </div> 
                 <div className="flex justify-end gap-2 my-2">
                    <button
                        className="btn btn-sm btn-success mr-2"
                        onClick={() => onAccept(appointment.id)}>
                        Booking
                    </button>
                  
                </div>
                </div>
               
            </div>
        </div>
    </>
    )
}

export default UserRequestCard