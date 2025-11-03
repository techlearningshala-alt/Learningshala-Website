import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import { CheckCircle2, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CoursePageFees = () => {
  return (
     <div className='content_card'> 
    <CourseContentHeading title="Course Fees" />
    <p>An online degree is an academic qualification—like an associate&apos;s, bachelor&apos;s, or master&apos;s degree—that is earned by completing coursework and assignments primarily or entirely online through an internet-connected computer, rather than attending classes at a physical campus. These programs offer flexibility by allowing students to study on their own schedules and from any location, using digital platforms, virtual classes, and online learning management systems to interact with faculty and peers. When earned from a recognized and accredited institution, an online degree holds the same academic value as its traditional, on-campus counterpart.</p>
     <Card className="border-0 rounded-xl shadow-none mb-6 bg-gray-50 py-2">
          <CardContent className="p-4 text-center">
            <h2 className="text-2xl font-semibold mb-1 text-green-600">
              EMI starting at ₹6,776/month only
            </h2>
            <p className="text-muted-foreground">
              The course fee is <span className='font-bold'>₹2,75,000</span>
            </p>

            <hr className="my-4" />

            <h3 className="text-xl font-semibold mb-6">
              Invest in your career
            </h3>

            <div className="grid md:grid-cols-2 gap-2 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 mt-1" />
                <p>
                  Lead AI innovation by mastering core AI & ML concepts &
                  technologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 mt-1" />
                <p>
                  Secure a dream career in AI with our dedicated career support
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 mt-1" />
                <p>
                  Build AI-powered applications using GenAI, NLP and other tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 mt-1" />
                <p>
                  Earn dual certificates from Texas McCombs & Great Lakes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Easy Payment Plan */}
        <Card className="border-none rounded-xl shadow-none  bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Easy Payment Plans</h4>
                <p className="text-muted-foreground">
                  Avail our EMI options & get financial assistance
                </p>
              </div>
            </div>
            <button className=" rounded-full px-3 py-3 font-semibold bg-purple-600 transition-colors duration-300 hover:bg-purple-700">
              <span className="text-lg  text-white px-4 py-2 rounded-full">Check Plans</span>
            </button>
          </CardContent>
        </Card>
    </div>
  )
}

export default CoursePageFees
