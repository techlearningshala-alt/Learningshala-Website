import Link from 'next/link'
import React from 'react'

const CoursePageToc = () => {
    return (
        <div className='content_card'>
            <h2 className='font-bold text-xl mb-4'>Table of Contents</h2>
            <ol className="space-y-2" style={{ listStyleType: "none", paddingLeft: "0px" }}>
                {[0, 1, 2, 3, 4, 5, 6].map((sec) => (
                    <li key={sec.id} className={`!mb-2`}>
                        <Link
                            href={`#${sec.id}`}
                            smooth={true}
                            className="font-bold hover:underline cursor-pointer"
                            activeClassName="font-bold text-primary"
                        >
                            Why Choose Online MBA Course
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default CoursePageToc