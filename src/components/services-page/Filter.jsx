import React from 'react'
import BudgetFilter from './BudgetFilter'
import RatingFilter from '../common/RatingFilter'
import Test from './Test'

function Filter() {
  return (
    <div>
      <div>
      <BudgetFilter/>
      </div>

      <div>
      <RatingFilter/>
      </div>

      <div>
      <Test/>
      </div>

    </div>
  )
}

export default Filter