import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import { FileUser, HandCoins } from 'lucide-react'
import PrimaryButton from '../custom/shared/PrimaryButton'
import SecondaryButton from '../custom/shared/SecondaryButton'

const CoursePageLoan = () => {
  return (
    <div className='content_card'> 
    <CourseContentHeading title="Loan Facility Available" />
    <p>An online degree is an academic qualification—like an associate&apos;s, bachelor&apos;s, or master&apos;s degree—that is earned by completing coursework and assignments primarily or entirely online through an internet-connected computer, rather than attending classes at a physical campus. These programs offer flexibility by allowing students to study on their own schedules and from any location, using digital platforms, virtual classes, and online learning management systems to interact with faculty and peers. When earned from a recognized and accredited institution, an online degree holds the same academic value as its traditional, on-campus counterpart.</p>
    <div className='grid grid-cols-2 gap-4 mt-6'>
      <div className='bg-[#faf9f7] p-6 rounded-lg flex flex-col space-y-4'>
        <FileUser className='w-8 h-8 text-primary' />
        <h3 className='text-lg font-bold'>Loan Eligibility</h3>
        <p>To be eligible for a loan, you must have completed your course up to the point of application. You must also have a valid bank account with a minimum balance of $100.</p>
        <PrimaryButton title="Check Eligibility" />
      </div>
       <div className='bg-[#faf9f7] p-6 rounded-lg flex flex-col space-y-4'>
        <HandCoins className='w-8 h-8 text-primary' />
        <h3 className='text-lg font-bold'>Loan Process</h3>
        <p>To apply for a loan, you must fill out an application form and provide proof of your income and creditworthiness. Once your application is reviewed, you will be notified of your decision.</p>
        <SecondaryButton title="Apply for Loan" />
       </div>
    </div>
    </div>
  )
}

export default CoursePageLoan