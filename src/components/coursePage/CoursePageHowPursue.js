import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import PrimaryButton from '../custom/shared/PrimaryButton'
import { Rocket, ShieldCheck, Star } from 'lucide-react'

const CoursePageHowPursue = () => {
  return (
    <div className='content_card'> 
    <CourseContentHeading title="How can pursue Online MBA Degree" />
     <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-[#faf9f7] p-6 rounded-lg flex flex-col space-y-4">
                   <Star className='text-primary w-8 h-8' />
                    <h3 className="text-xl font-semibold">Expert Instructors</h3>
                    <p className="text-gray-600 text-sm">
                        Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
                    </p>
                </div>
                <div className="bg-[#faf9f7] p-6 rounded-lg flex flex-col space-y-4">
                   <Rocket className='text-primary w-8 h-8' />
                    <h3 className="text-xl font-semibold">Career-Boost Certify</h3>
                    <p className="text-gray-600 text-sm">
                        Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition, and open doors to new career opportunities.
                    </p>
                </div>

                <div className="bg-[#fef4cc] p-6 rounded-lg flex flex-col justify-between md:row-span-2">
                    <div>

                        <h3 className="text-xl font-semibold mb-4">Flexible Learning Schedules</h3>
                        <p className="text-sm mb-6">
                            At expert.io, we understand the importance of balancing learning with a busy lifestyle. That&apos;s why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
                            <br /><br />
                            Whether you&apos;re a working professional or a student, you can customize your schedule to fit your needs.
                        </p>
                    </div>

                    <PrimaryButton title=" Talk to our expert" />
                </div>
                <div className="bg-[#faf9f7] p-6 rounded-lg flex flex-col space-y-4 md:col-span-2">
                   <ShieldCheck className='text-primary w-8 h-8' />
                    <h3 className="text-xl font-semibold">100+ High Impact Courses</h3>
                    <p className="text-gray-600 text-sm">
                        expert.io offers over 100 courses that cover essential skills in today&apos;s tech industry. Whether you&apos;re a beginner or an experienced professional, our courses in web development, data science, and cybersecurity provide practical, hands-on learning to help you apply your skills immediately & competitive.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default CoursePageHowPursue