import Contactus from '@/components/custom/about/Contactus'
import MediaSlider from '@/components/custom/homepage/media/MediaSlider'
import MainHeading from '@/components/custom/shared/MainHeading'
import UniversitySlider from '@/components/custom/shared/slider/UniversitySlider'
import { getMediaData } from '@/services/HomepageService'
import Image from 'next/image'
import React from 'react'

export async function getStaticProps() {

  const mediaData = await getMediaData().then((response) => response?.data?.data?.data || []);


  return {
    props: {
     mediaData: mediaData,
    },
    revalidate: 300,
  };
}
const about = ({ mediaData }) => {
    const [loading, setLoading] = React.useState(true);

    const founderData = [
        {
            img: "/images/about/t1.jpg",
            name: "Ashish",
            designation: "Founder And CEO",
        },
        {
            img: "/images/about/t1.jpg",
            name: "Ashish",
            designation: "Founder And CEO",
        },
        {
            img: "/images/about/t1.jpg",
            name: "Ashish",
            designation: "Founder And CEO",
        },
    ]

    React.useEffect(() => {
        if ( mediaData && mediaData.length > 0) {
          setLoading(false);
        }
      }, [mediaData]);

    return (
        <div>
            <div className='container'>
                <MainHeading title={<>Asia’s <span className="text-primary">
   Premier Higher </span>EdTech Platform.</>} />
                <div className='grid grid-cols-12 gap-6 sec_mb'>
                    <div className='col-span-8'>
                        <Image src="/images/about/about1.jpg" width={1920} className='rounded-2xl' height={400} alt="" />
                    </div>
                    <div className='col-span-4'>
                        <div className='bg-gray-950 text-white rounded-2xl h-full flex flex-col justify-center p-8'>
                            <p className='text-3xl font-bold mb-4'>Empowering teams to achieve more</p>
                            <p>we believe that productivity should be seamless, intuitive, and effective. Founded with the mission to streamline task management and team collaboration, our platform is designed to empower businesses</p>
                        </div>
                    </div>
                </div>
                <MainHeading title="Trusted by top the Universities" className="text-center" />
                <UniversitySlider />
                <MainHeading title="Our success by the numbers" className="text-center" />
                <div className='grid grid-cols-12 bg-[#f8f4f1] gap-6 p-12 rounded-2xl sec_mb'>
                    <div className='col-span-4'>
                        <div className='bg-[#fbf9f8] rounded-2xl p-8 h-full'>
                            <p className='font-bold text-4xl mb-2'>150+</p>
                            <p className='mb-4 font-medium'>Online Universities Listed</p>
                            <p>Your go-to platform for finding the best accredited universities offering flexible and quality education worldwide.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='bg-[#fbf9f8] rounded-2xl p-8 h-full'>
                            <p className='font-bold text-4xl mb-2'>1M+</p>
                            <p className='mb-4 font-medium'>Students Reached</p>
                            <p>Helping students make informed choices by providing detailed information on courses, fees, and global study opportunities.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='bg-[#fbf9f8] rounded-2xl p-8 h-full'>
                            <p className='font-bold text-4xl mb-2'>99%</p>
                            <p className='mb-4 font-medium'>Reliable & Verified Information</p>
                            <p>All listings are thoroughly researched and verified to ensure you access accurate and trustworthy educational resources.</p>
                        </div>
                    </div>
                </div>
                <MainHeading title={<>Meet our <span className='text-secondary'>Founders</span></>} className="text-center" />
                <div className='grid grid-cols-12 max-w-5xl mx-auto gap-6 sec_mb'>
                    {founderData.map((data, index) => (
                        <div key={index} className='col-span-4'>
                            <div className='border rounded-2xl overflow-hidden bg-[#f8f4f1] text-center'><Image src={data.img} width={372} height={372} alt="profile" className='rounded-2xl mx-auto' />
                                <div className='py-3'>  <p className='text-xl font-bold'>
                                    {data.name}
                                </p>
                                    <p>{data.designation}</p></div>
                            </div>
                        </div>
                    ))}

                </div>
                

            </div>
            <MediaSlider mediaData={mediaData || []} loading={loading} />
            <Contactus/>
        </div>
    )
}

export default about