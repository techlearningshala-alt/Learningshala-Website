import React from 'react'
import SecondaryButton from './SecondaryButton'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className='container'>
      <div className='bg-[#fde999] rounded-3xl p-6 md:p-12'>
        <p className='text-xl md:text-2xl font-bold mb-4'>Let’s Write Your Success Story. Together.
        </p>
        <p className='text-secondary mb-4 font-bold'>Get a Personalised Roadmap from a Career Expert.  </p>
       <Link href="/contact-us"> <SecondaryButton title="Let’s Talk." className="max-w-max" /></Link>
      </div>
    </div>
  )
}

export default Cta