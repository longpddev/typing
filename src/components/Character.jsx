import React, { memo } from 'react'
import { characterStatus, pointerStatus } from '../common/constants'

const Character = memo(({
  char,
  index
}) => {
  return (
    <span id={`character-${index}-${char}`}>
      <span style={{
        letterSpacing: '-4px'
      }} className={pointerStatus.unactive}>|</span>
      <span className={characterStatus.normal} >{char}</span>
    </span>
  )
})

export default Character