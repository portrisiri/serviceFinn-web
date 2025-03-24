import React, { useEffect, useState } from 'react';
import { Image } from 'lucide-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function CreateShopHourly(props) {
    const [subcat, setSubCat] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const createService = async (data) => {
        try {
            const response = await axios.post(`http://localhost:4289/service/create`, {
                providerId: 'P10223BKK', // Ensure this is available from props
                subCatName: data.shopType, // shopType holds subCatId
                price: data.shopPrice,
                shopDetails: data.shopDetail,
                shopPicture: data.shopPicture || null, // Handle optional image upload
            });
    
            console.log('Service created successfully:', response.data);
        } catch (err) {
            console.error('Error creating service:', err.response?.data || err.message);
        }
    };

    useEffect(() => {
        const getSubCat = async () => {
            try {
                const resp = await axios.get(`http://localhost:4289/category/${props.providerCat}`);
                setSubCat(resp.data.results);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };
        getSubCat();
    }, [props.providerCat]);

    const onSubmit = (data) => {
        console.log(data);
        createService(data)
        // Here you can handle the form submission, e.g., send data to an API
    };

    return (
        <>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl text-blue-900 font-bold mb-4">Create your Shop</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-lg text-blue-900 font-semibold">Shop Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('shopName', { required: 'Shop name is required' })}
                        />
                        {errors.shopName && <p className="text-red-500">{errors.shopName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-medium text-blue-900 dark:text-white">Type</label>
                        <select
                            className="bg-white border border-gray-300 text-blue-900 text-md rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('shopType', { required: 'Shop type is required' })}
                        >
                            <option value="">Select an option</option>
                            {subcat.map((el) => (
                                <option key={el.subCatId} value={el.subCatName}>
                                    {el.subCatName}
                                </option>
                            ))}
                        </select>
                        {errors.shopType && <p className="text-red-500">{errors.shopType.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg text-blue-900 font-semibold">Price</label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            {...register('shopPrice', {
                                required: 'Price is required',
                                min: { value: 1, message: 'Price must be at least 1' },
                            })}
                        />
                        {errors.shopPrice && <p className="text-red-500">{errors.shopPrice.message}</p>}
                    </div>

                    <div>
                        <label className="block w-full py-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg text-blue-900 font-semibold">
                            Detail
                        </label>
                        <textarea
                            className="p-2 border border-gray-800 w-full"
                            rows={4}
                            {...register('shopDetail', { required: 'Shop detail is required' })}
                        ></textarea>
                        {errors.shopDetail && <p className="text-red-500">{errors.shopDetail.message}</p>}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="flex w-55 p-2 bg-blue-300 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <Image />
                            <p className="mx-2">add your shop image</p>
                        </button>
                    </div>


                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            className="flex w-1/7 p-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            <p>Submit</p>
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default CreateShopHourly;

                    {/* <h3 className="flex mb-4 my-6 font-semibold text-lg text-blue-900 dark:text-white">Working Time (Hourly)</h3>
          <div className="flex">
            <h6 className="mx-39 my-3 font-semibold text-md text-blue-900 dark:text-white mr-8">Start Time</h6>
            <h6 className="mx-16 my-3 font-semibold text-md text-blue-900 dark:text-white">End Time</h6>
          </div> */}

{/* Working Time Inputs using react hook form*/ }


{/* {[
            { day: 'Sun', registerName: 'sun' },
            { day: 'Mon', registerName: 'mon' },
            { day: 'Tue', registerName: 'tue' },
            { day: 'Wed', registerName: 'wed' },
            { day: 'Thu', registerName: 'thu' },
            { day: 'Fri', registerName: 'fri' },
            { day: 'Sat', registerName: 'sat' },
          ].map((dayInfo) => (
            <div key={dayInfo.day} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-blue-600 dark:border-blue-500"
                {...register(`${dayInfo.registerName}Enabled`)}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-blue-900 dark:text-gray-300">
                {dayInfo.day}
              </label>
              <div className="mx-5">
                <div className="relative">
                  <input
                    type="time"
                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // min="09:00"
                    // max="18:00"
                    // value="00:00"
                    {...register(`${dayInfo.registerName}StartTime`)}
                  />
                </div>
              </div>
              <div className="mx-10">
                <div className="relative">
                  <input
                    type="time"
                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // min="09:00"
                    // max="18:00"
                    // value="00:00"
                    {...register(`${dayInfo.registerName}EndTime`)}
                  />
                </div>
              </div>
            </div>
          ))}  */}
