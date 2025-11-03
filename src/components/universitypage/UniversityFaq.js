import React from 'react'
import UniversityContentHeading from './UniversityContentHeading'
import FaqCategory from '../custom/shared/FaqCategory';
import useWindowSize from '@/lib/use-window-size';

const UniversityFaq = ({id,title,props}) => { 
  const size = useWindowSize();
  return (
    <div id={id} className="content_card">
         <UniversityContentHeading title={title} />
         <FaqCategory faqData={props?.faqData} screenSize={size} />
    </div>
  )
}

export default UniversityFaq