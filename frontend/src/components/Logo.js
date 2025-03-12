import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center justify-left leading-3 m-2">
      <img className="w-2/3 h-2/3 mr-2" src={process.env.PUBLIC_URL + '/logo2.png'} alt="Logo" />
      {/* <span className="text-base">BCDN</span> */}
    </div>
  )
}
