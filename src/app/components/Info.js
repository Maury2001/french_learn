import React from 'react'
import Image from 'next/image'
import trust from '../../../public/images/trust.png'
import pers from '../../../public/images/pers.png'
import phone from '../../../public/images/phone.png'
import money from '../../../public/images/money.png'

export default function Info
() {
  return (
    <div className='grid grid-cols-8 gap-4 p-10'>
        <div className=' col-span-1'></div>
        <div className=' col-span-1'></div>
        

        <div className=' col-span-1 flex flex-col justify-center items-center text-center border-x-4 '>
          <Image src={phone} height={100} priority/>

            <h1>
                Free Consultation
            </h1>
        </div>
       
        <div className=' col-span-1 flex flex-col justify-center items-center text-center border-x-4'>
           
        <Image src={pers} height={100} priority/>
            <h1>
                Personalized Learning
            </h1>

        </div>
        <div className=' col-span-1 flex flex-col justify-center items-center text-center border-x-4'>
           
        <Image src={trust} height={100} priority/>
            <h1>
                Trusted content
            </h1>

        </div>
        <div className=' col-span-1 flex flex-col justify-center items-center text-center border-x-4'>
           
        <Image src={money} height={100} priority/>
            <h1>
                100% Money Guarantee
            </h1>

           
        </div>
        <div className=' col-span-1'></div>
        <div className=' col-span-1'></div>
    </div>
  )
}
