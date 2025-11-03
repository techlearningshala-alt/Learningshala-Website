import React from 'react'
import UniversityContentHeading from './UniversityContentHeading'
import SpanButton from './SpanButton'
import { ChevronRight } from 'lucide-react'

const UniversityWhyChoose = ({ id, title, props }) => {


    return (
        <div id={id} className="content_card">
            <div className='flex flex-wrap items-center justify-between mb-4'> <UniversityContentHeading className="!m-0" title={title} />
                <SpanButton title="Talk to university" icon={<ChevronRight className='w-4 h-4' />} /></div>
            <div
                dangerouslySetInnerHTML={{ __html: props.content }}
                className="rich_text"
            />
            <div className='grid grid-cols-12 gap-4'>

                {props.gridContent.map((data, index) => (
                    <div className={`col-span-12 lg:col-span-4 rounded-xl p-6`} style={{ backgroundColor: data.bgColor }} key={index}>
                        {/* <span className='w-8 h-8 bg-white inline-flex rounded-full items-center justify-center mb-3'>{index + 1}</span> */}
                        <h3 className='font-bold mb-2'>{data.title}</h3>
                        <p className='!mb-0'> {data.desc}</p>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default UniversityWhyChoose