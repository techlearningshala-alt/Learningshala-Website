import React from 'react'
import UniversityContentHeading from './UniversityContentHeading'

const UniversityKeyBenefits = ({id,title,props}) => {
  return (
    <div id={id} className="content_card">
          <UniversityContentHeading title={title} />
          <div dangerouslySetInnerHTML={{ __html: props.content }} className="rich_text" />
    </div>
  )
}

export default UniversityKeyBenefits