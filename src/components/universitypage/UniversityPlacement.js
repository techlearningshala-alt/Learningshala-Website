import React from 'react'
import UniversityContentHeading from './UniversityContentHeading'
import Image from 'next/image'
import PrimaryButton from '../custom/shared/PrimaryButton'

const UniversityPlacement = ({ id, title, props,universityData }) => {
  return (
    <div id={id} className='content_card'>
      <UniversityContentHeading title={title} />
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <UniversityContentHeading title="Placement Partners" />
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 placement_partner mb-6'>
        {universityData?.placement_partners?.map((item, index) => (
          <span className='border px-3 py-2 rounded-xl bg-white' key={index}><Image className="object-contain" src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.logo}`} width="100" height="40" alt={item.name} /></span>
        ))} 
      
      </div>
      <div className='content_card !bg-[#f4f2ea] flex justify-between flex-wrap items-center gap-4'>
        <Image src="/images/university/job-offer.png" width={70} height={70} alt="placement banner" />
        <div>
          <p className='font-bold !mb-0 text-red-700'>Get Placement Updates</p>
          <p className='!mb-0'>Stay updated with the latest placement news, trends, and opportunities from Amity University Hyderabad.</p>
        </div>
        <div>
          <PrimaryButton title="Apply Now" />
        </div>
      </div>
    </div>
  )
}

export default UniversityPlacement