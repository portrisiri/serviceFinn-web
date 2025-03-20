import React from 'react'
import BudgetFilter from './BudgetFilter'

import Test from './Test'
import RatingFilter from './RatingFilter'

function Filter() {
  return (
    <div>
      <div>
      <BudgetFilter/>
      </div>

      <div>
      <RatingFilter/>
      </div>

      {/* <div>
      <Test/>
      </div> */}

    </div>
  )
}

export default Filter