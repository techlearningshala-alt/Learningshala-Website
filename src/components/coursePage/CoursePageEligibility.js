import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import PrimaryButton from '../custom/shared/PrimaryButton'
import SecondaryButton from '../custom/shared/SecondaryButton'
import { Marquee } from '../magicui/marquee'
import { cn } from "@/lib/utils";
import Image from 'next/image'


const CoursePageEligibility = () => {
  const reviews = [
    {
      name: "Jack",
      img: "/images/homepage/experts/m1.webp",
    },
    {
      name: "Jill",

      img: "/images/homepage/experts/m2.webp",
    },
    {
      name: "John",

      img: "/images/homepage/experts/m3.webp",
    },
    {
      name: "Jane",

      img: "/images/homepage/experts/m4.webp",
    },
    {
      name: "Jenny",

      img: "/images/homepage/experts/m1.webp",
    },
    {
      name: "James",

      img: "/images/homepage/experts/m2.webp",
    },
  ]

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);


  const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure
      >
        <Image className='rounded-full' width={60} height={60} alt="" src={img} />
        <p className="text-xs font-medium text-center dark:text-white/40 m-0">{name}</p>
      </figure>
    );
  };
  return (
    <div className='content_card'>
      <CourseContentHeading title="Eligibility" />
      <p>Designed for graduates and working professionals seeking leadership roles. Review the criteria below before you apply.</p>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-8 border rounded-3xl p-6 flex flex-col justify-between'>

          <div><h3 className='font-bold text-xl mb-4'>Who can apply</h3>
          <ul>
            <li>
              A recognized Bachelor&apos;s degree (3 or 4-year program) from an accredited institution.</li>
            <li>Minimum cumulative score typically around 50% or equivalent GPA (programs may vary).</li>
            <li>Professional experience (1–2 years) preferred; fresh graduates may also be considered.</li>
            <li>English language proficiency required for non-native speakers (tests or prior medium of instruction may apply).</li>
            <li>Required documents: academic transcripts, government ID, updated resume/CV, and statement of purpose.</li>
            <li>Required documents: academic transcripts, government ID, updated resume/CV, and statement of purpose.</li>

          </ul></div>
          <div className='flex justify-between items-center gap-4'> <PrimaryButton title="Apply Now" />
            <SecondaryButton title="Download Brochure" /></div>
        </div>
        <div className='col-span-4 border rounded-3xl'>
          <div className='p-6'>  <h3 className='font-bold text-xl mb-4'>Talk to our Counsellors</h3>
            <p>Get personalized guidance and support from our experienced counselors. Schedule a free consultation today!</p></div>
          <div className='relative'>  <Marquee pauseOnHover className="[--duration:20s] ">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div></div>
          <div className='p-6'>    <PrimaryButton title="Schedule a Consultation" /></div>
        </div>
      </div>
    </div>
  )
}

export default CoursePageEligibility