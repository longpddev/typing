import React from 'react'
import { tabItems } from '../common/constants'
import { clas } from '../helper/function'

const Tab = ({
  active,
  onChange
}) => {
  const getClassActive = (type) => clas({
    'text-sky-500': active === type,
    'border-sky-500': active === type
  })

  return (
    <div className="flex justify-center w-full mb-4 space-x-3 mt-4">
      <button onClick={() => onChange(tabItems.main)} className={getClassActive(tabItems.main)}>Main</button>
      <button onClick={() => onChange(tabItems.settings)} className={getClassActive(tabItems.settings)}>Settings</button>
    </div>
  )
}

export default Tab