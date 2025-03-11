import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center justify-left leading-3 m-2">
      <img className="w-10 h-10 mr-2" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      <span className="font-medium">Web3Hub</span>
    </div>
  )
}
