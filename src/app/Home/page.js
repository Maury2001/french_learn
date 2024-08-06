import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
        <NavBar/>
        
        <div className=" flex w-full p-10">
        <div className="w-1/2 p-4 flex justify-center items-center">
          {/* <Image src={prof} className=" rounded-full" /> */}
        </div>
        <div className=" flex justify-center items-center w-1/2 p-10">
          <h2>
            Learn from experienced tutors from across the country
            <br />
            <br />
            Transform Your French Skills with Expert Guidance! Fluency Awaits
            Start Your French Journey Today
          </h2>
        </div>
      </div>
        </div>
  )
}
