import React from 'react'
import Image from 'next/image'
import PrimaryButton from '../custom/shared/PrimaryButton'
import CourseContentHeading from './CourseContentHeading'


const CoursePageAdmissionProcess = () => {
  return (
    <div className='content_card'>
      <CourseContentHeading title="Admission Process" />
      <Image src="/images/course/admission-img.png" className='w-full' width={500} height={300} alt="admission process" />
      <div className='content_card !bg-[#f4f2ea] flex justify-between items-center'>
        <div>
          <p className='font-bold !mb-0 text-red-700'>Limited seats available</p>
          <p className='!mb-0'>Apply today and get best offer</p>
        </div>
        <div>
          <PrimaryButton title="Apply Now" />
        </div>
      </div>
    </div>
  )
}

export default CoursePageAdmissionProcess