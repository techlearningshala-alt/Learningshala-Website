import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../custom/shared/PrimaryButton'
import VideoModal from '../custom/shared/modal/VideoModal'
import { IndianRupee } from 'lucide-react'
const CoursePageBannerImage = () => {
    return (
        <>
            <div className='relative'>  <Image className='rounded-lg' src={"/images/university/banner.webp"} width={400} height={400} alt="online mba" /><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <VideoModal
                    title={"Watch Course Overview"}
                    videoID={"123456"}
                />
            </div></div>
            <p className='my-4 flex justify-between items-center'><span className='font-semibold'>Fee <u className='text-primary'>(EMI Available)</u> :</span><span className='font-extrabold text-green-600 text-xl flex items-center'><IndianRupee className='w-5 h-5' />34,0000</span></p>
            <p className='my-4 flex justify-between items-center'><span className='font-semibold'>Course Duration :</span><span className='font-bold text-green-600 text-md flex gap-1 items-center'>24 Months</span></p>

            <PrimaryButton title="Apply Now" />
        </>
    )
}

export default CoursePageBannerImage