import React from 'react'

const Button = ({btnName}) => {
  return (
    <button className="px-6 py-2 text-lg font-semibold rounded-md 
                           bg-gradient-to-r from-[#3aab50] to-[#268eff] 
                           text-black shadow-lg cursor-pointer">
          {btnName}
    </button>
  )
}

export default Button
