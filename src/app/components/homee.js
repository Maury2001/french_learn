import React from 'react'
import AnimatedText from './AnimatedText'
import log from '../../../public/images/profren.png'
import Image from 'next/image'

export default function Homee() {
  return (
    <section className="w-full h-screen flex p-4 ">
    <div className="w-1/2 flex flex-col items-center self-center p-4 mt-10 lg:w-full ">
    <AnimatedText 
    text={'Are you looking to learn French?'}
    className="!text-2xl !font-bold"
    />
    <AnimatedText 
    text={'Master French grammar, vocabulary, and communication skills to speak confidently and effectively.'}
    className="!text-2xl !font-medium"
    />

      <div className=" p-10">
        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          Book Class Now
        </button>
      </div>
    </div>

    <div className="w-1/2 md:w-full">
      <Image className="w-full h-auto" src={log} priority />
    </div>
  </section>
  )
}
