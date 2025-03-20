

function RatingFilter() {
 
  return (
    <div>
      {/* <select
      className="w-full p-[10.5px] rounded-md focus:ring focus:ring-blue-300 h-[50px]"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
    >
      <option value="">Ratings</option>
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
      <option value="3">3 Stars</option>
    </select> */}

      {/* <div className="flex justify-center "> */}
      <div className="divider my-0"></div>
      <p>Choose Rate</p>
      <div className="divider my-0"></div>
      <div className='flex flex-col gap-2 items-start '>
        <button className="btn btn-soft btn-primary">
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
        </button>

        <button className="btn btn-soft btn-primary">
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
        </button>

        <button className="btn btn-soft btn-primary">
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
          <span className=" text-orange-400">⭐</span>
        </button>
      </div>

    </div>



    // </div>
  )
}

export default RatingFilter

