import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { ChevronRight, Download } from 'lucide-react'
import Image from 'next/image'

const CoursePageBannerInfo = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div>       <div className='flex justify-end'> <Badge asChild>
                <Link href="/">Advance</Link>
            </Badge></div>
                <p className='text-sm mb-3'><span>Home / </span><span>Online MBA Courses</span></p>
                <h1 className='text-3xl font-bold mb-3'>Online MBA Courses</h1>
                <p className='mb-4 line-clamp-8'>An online MBA degree is a flexible program for working professionals to build leadership, management and strategic skills. Through this online MBA program, you&apos;ll gain finance, marketing, operations and analytics expertise to advance your career and take on leadership roles across industries.An online MBA degree is a flexible program for working professionals to build leadership, management and strategic skills. Through this online MBA program, you&apos;ll gain finance, marketing, operations and analytics expertise to advance your career and take on leadership roles across industries.An online MBA degree is a flexible program for working professionals to build leadership, management and strategic skills. Through this online MBA program, you&apos;ll gain finance, marketing, operations and analytics expertise to advance your career and take on leadership roles across industries.An online MBA degree is a flexible program for working professionals to build leadership, management and strategic skills</p>

                <p className="flex gap-2">
                    <Link
                        href="/contact"
                        className="bg-secondary inline-flex gap-2 text-white border-2 border-secondary items-center font-bold rounded-3xl text-sm px-3 py-2"
                    >
                        <span className="flex -space-x-[0.45rem]">
                            <Image
                                className="ring-background rounded-full ring-1"
                                src="/images/university/avatar/a1.jpg"
                                width={24}
                                height={24}
                                alt="Avatar 01"
                            />
                            <Image
                                className="ring-background rounded-full ring-1"
                                src="/images/university/avatar/a2.jpg"
                                width={24}
                                height={24}
                                alt="Avatar 02"
                            />
                            <Image
                                className="ring-background rounded-full ring-1"
                                src="/images/university/avatar/a3.jpg"
                                width={24}
                                height={24}
                                alt="Avatar 03"
                            />
                        </span>
                        Connect Now <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                        download={true}
                        href={"/images/university/brochure.pdf"}
                        className="bg-white gap-2 inline-flex text-secondary border-2 border-secondary items-center font-bold rounded-3xl text-sm px-4 py-2"
                    >
                        Download Brochure <Download className="w-5 h-5" />
                    </Link>
                </p></div>
            <div> <hr className='my-4' />
                <div className="flex justify-between items-end gap-2 !m-0">
                    <div className="flex items-center gap-4">
                        <Image
                            className="ring-background rounded-full ring-1"
                            src="/images/university/avatar/a1.jpg"
                            width={40}
                            height={40}
                            alt="Avatar 01"
                        />
                        <p className='flex flex-col !m-0'> <span className='italic text-[12px]'>Posted By</span>
                            <span className='font-semibold text-sm'>Pooja , HR University</span></p>

                    </div>
                    <p className='!m-0 text-[12px] text-muted-foreground'>Last Updated : 07 , Nov 2025</p>



                </div></div>
        </div>
    )
}

export default CoursePageBannerInfo