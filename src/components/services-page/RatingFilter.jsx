function RatingFilter(props) {
  const { searchParams, setSearchParams } = props;

  const handleRatingChange = (e) => {
    if (searchParams.rating == e.target.value) {
      setSearchParams((prv) => ({ ...prv, rating: 0 }));
      console.log('to 0');
    } else {
      setSearchParams((prv) => ({ ...prv, rating: e.target.value }));
    }
  };
  return (
    <div>
      {/* <div className="flex justify-center "> */}
      <div className="divider my-0"></div>
      <p>Filter by Rating</p>
      {/* <div className='flex flex-col gap-2 items-start '>
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
      </div> */}
      {/* Rating 5 Stars */}
      <div className="flex items-center gap-2">
        <input type="radio" name="rating" id="rating-5" value="5" onClick={handleRatingChange} className="hidden" />
        <label
          htmlFor="rating-5"
          className={`flex items-center gap-2 cursor-pointer rounded-md px-2 ${
            searchParams.rating === '5' ? 'bg-blue-300' : ''
          }`}
        >
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
        </label>
      </div>

      {/* Rating 4 Stars */}
      <div className="flex items-center gap-2">
        <input type="radio" name="rating" id="rating-4" value="4" onClick={handleRatingChange} className="hidden" />
        <label
          htmlFor="rating-4"
          className={`flex items-center gap-2 cursor-pointer rounded-md px-2 ${
            searchParams.rating === '4' ? 'bg-blue-300' : ''
          }`}
        >
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
        </label>
      </div>

      {/* Rating 3 Stars */}
      <div className="flex items-center gap-2">
        <input type="radio" name="rating" id="rating-3" value="3" onClick={handleRatingChange} className="hidden" />
        <label
          htmlFor="rating-3"
          className={`flex items-center gap-2 cursor-pointer rounded-md px-2 ${
            searchParams.rating === '3' ? 'bg-blue-300' : ''
          }`}
        >
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
        </label>
      </div>

      {/* Rating 2 Stars */}
      <div className="flex items-center gap-2">
        <input type="radio" name="rating" id="rating-2" value="2" onClick={handleRatingChange} className="hidden" />
        <label
          htmlFor="rating-2"
          className={`flex items-center gap-2 cursor-pointer rounded-md px-2 ${
            searchParams.rating === '2' ? 'bg-blue-300' : ''
          }`}
        >
          <span className="text-orange-400">⭐</span>
          <span className="text-orange-400">⭐</span>
        </label>
      </div>

      {/* Rating 1 Star */}
      <div className="flex items-center gap-2">
        <input type="radio" name="rating" id="rating-1" value="1" onClick={handleRatingChange} className="hidden" />
        <label
          htmlFor="rating-1"
          className={`flex items-center gap-2 cursor-pointer rounded-md px-2 ${
            searchParams.rating === '1' ? 'bg-blue-300' : ''
          }`}
        >
          <span className="text-orange-400">⭐</span>
        </label>
      </div>
    </div>

    // </div>
  );
}

export default RatingFilter;
