import Link from 'next/link'
import React from 'react'
import logo from '../../../public/images/fran.png'
import {motion} from "framer-motion"
import Image from 'next/image'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex h-32 w-48 items-center justify-center mt-2 sm:mb-4'>
    
      {/* <Image src={logo} className=' h-full w-full sm:h-20'/> */}
      <h2 className=' font-light text-xl'>
      🆃🆄🆃🅾🆁 

      </h2>
    </div>
  )
}
// 🆅🅸🅲🅺🆈
export default Logo