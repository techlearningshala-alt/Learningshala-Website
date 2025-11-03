import React from 'react'
import UniversityContentHeading from './UniversityContentHeading'
import Image from 'next/image'

const UniversitySampleCertificate = ({ id, title, props }) => {
  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8'>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
        <div className='col-span-12 md:col-span-4 flex justify-center'>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${props.sampleImg}`} width={200} height={300} alt="sample certificate" />
        </div>
      </div>

    </div>
  )
}

export default UniversitySampleCertificate