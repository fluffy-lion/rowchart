import React from 'react'

export const SelectLabel = ({ text, setText }) => {
  return (
    <div>
        <button onClick={() => setText(text)}>{text}</button>
    </div>
  )
}
