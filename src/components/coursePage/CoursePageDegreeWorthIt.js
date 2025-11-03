import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import Image from 'next/image'

const CoursePageDegreeWorthIt = () => {
  return (
     <div className='content_card'> 
    <CourseContentHeading title="Is it Worth It?" />
    <p>An online degree is an academic qualification—like an associate&apos;s, bachelor&apos;s, or master&apos;s degree—that is earned by completing coursework and assignments primarily or entirely online through an internet-connected computer, rather than attending classes at a physical campus. These programs offer flexibility by allowing students to study on their own schedules and from any location, using digital platforms, virtual classes, and online learning management systems to interact with faculty and peers. When earned from a recognized and accredited institution, an online degree holds the same academic value as its traditional, on-campus counterpart.</p>
    <Image src={'/images/course/worthit_del.png'}  width={800} height={300} alt="Is it Worth It?" />
    </div>
  )
}

export default CoursePageDegreeWorthIt