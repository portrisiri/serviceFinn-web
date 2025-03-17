import { Image } from 'lucide-react'
import React from 'react'


function ProviderRequestCard() {
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
                    <p className="text-sm text-grey-600">Job Detail : ล้างแอร์ 3 เครื่อง</p>
                    <button
                        className="btn btn-sm  btn-primary mr-2"
                        onClick={() => onAccept(Image.id)}>
                        Image on site
                    </button>
                </div> 
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn btn-sm btn-success mr-2"
                        onClick={() => onAccept(appointment.id)}>
                        Accept
                    </button>
                    <button
                        className="btn btn-sm btn-error"
                        onClick={() => onReject(appointment.id)}>
                        Reject
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProviderRequestCard