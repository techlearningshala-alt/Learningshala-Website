import CoursePageAdmissionProcess from '@/components/coursePage/CoursePageAdmissionProcess'
import CoursePageBanner from '@/components/coursePage/CoursePageBannerImage'
import CoursePageBannerInfo from '@/components/coursePage/CoursePageBannerInfo'
import CoursePageDegreeWorthIt from '@/components/coursePage/CoursePageDegreeWorthIt'
import CoursePageEligibility from '@/components/coursePage/CoursePageEligibility'
import CoursePageFees from '@/components/coursePage/CoursePageFees'
import CoursePageHowPursue from '@/components/coursePage/CoursePageHowPursue'
import CoursePageJobs from '@/components/coursePage/CoursePageJobs'
import CoursePageKeyHighlight from '@/components/coursePage/CoursePageKeyHighlight'
import CoursePageLoan from '@/components/coursePage/CoursePageLoan'
import CoursePageRelatedArticle from '@/components/coursePage/CoursePageRelatedArticle'
import CoursePageToc from '@/components/coursePage/CoursePageToc'
import CoursePageTypeOfCourses from '@/components/coursePage/CoursePageTypeOfCourses'
import CoursePageWhatIsDegree from '@/components/coursePage/CoursePageWhatIsDegree'
import CoursePageWhyChoose from '@/components/coursePage/CoursePageWhyChoose'
import FaqCategory from '@/components/custom/shared/FaqCategory'
import React from 'react'

const CoursePage = () => {

  const faqData = [
    {
      category: "Admission",
      id: "admission",
      items: [
        {
          id: "1",
          question: "How should I judge if this course is actually right for me?",
          answer:
            "The right course should align with your career goals, learning style, and budget.",
        },
        {
          id: "2",
          question: "How do I know if a university's '100% placement' promise is real?",
          answer:
            "We provide verifiable data on alumni success, salaries, and hiring companies.",
        },
      ],
    },
    {
      category: "Fees",
      id: "fees",
      items: [
        {
          id: "3",
          question: "How can I be sure I'm not overpaying for my degree?",
          answer:
            "Our comparison tool shows the ‘Total Cost of Ownership’ including hidden fees.",
        },
      ],
    },

  ]

  const allArticles = [
    {
      img: "/images/university/amity.jpg",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity1.webp",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity.jpg",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity1.webp",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
  ]

  const coursesList = [
    {
      name: "MBA",
      numberOfSpecialization: "20",
      fees: "20 L",
      mode: "Online",
      duration: "36 months",
      link: "/mba",
      img: "/images/university/testw1.webp",
    },
    {
      name: "MCA",
      numberOfSpecialization: "20",
      fees: "16 L",
      mode: "Online",
      duration: "24 months",
      link: "/mca",
      img: "/images/university/testw1.webp",
    },
    {
      name: "Bcom",
      numberOfSpecialization: "12",
      fees: "12 L",
      mode: "Online",
      duration: "36 months",
      link: "/bcom",
      img: "/images/university/c3.webp",
    },
    {
      name: "BBA",
      numberOfSpecialization: "5",
      fees: "10 L",
      mode: "Online",
      duration: "28 months",
      link: "/bba",
      img: "/images/university/c1.webp",
    },
    {
      name: "MCA",
      numberOfSpecialization: "20",
      fees: "16 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c2.webp",
    },
    {
      name: "Bcom",
      numberOfSpecialization: "12",
      fees: "12 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c3.webp",
    },
    {
      name: "BBA",
      numberOfSpecialization: "5",
      fees: "10 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c1.webp",
    },
    {
      name: "Bcom",
      numberOfSpecialization: "12",
      fees: "12 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c3.webp",
    },
    {
      name: "BBA",
      numberOfSpecialization: "5",
      fees: "10 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c1.webp",
    },
    {
      name: "Bcom",
      numberOfSpecialization: "12",
      fees: "12 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c3.webp",
    },
    {
      name: "BBA",
      numberOfSpecialization: "5",
      fees: "10 L",
      mode: "Online",
      duration: "36 months",
      link: "/",
      img: "/images/university/c1.webp",
    },
  ]
  return (
    <> <div className='container sec_mb'>
      <div className='grid grid-cols-12 gap-6 sec_mb'>
        <div className='col-span-8 shadow-sm p-6 rounded-lg flex'>
          <CoursePageBannerInfo />
        </div>
        <div className='col-span-4 shadow-sm p-4 rounded-lg'>
          <CoursePageBanner />
        </div>
      </div>
    </div>
      <div className='bg-gray-100 py-10 sec_mb'>
        <div className='container'>
          <CoursePageToc />
          <CoursePageWhatIsDegree />
          <CoursePageWhyChoose />
          <CoursePageHowPursue />
          <CoursePageWhatIsDegree />
          <CoursePageFees />
          <CoursePageTypeOfCourses coursesList={coursesList} />
          <CoursePageEligibility />
          <CoursePageLoan />
          <CoursePageDegreeWorthIt />
          <CoursePageKeyHighlight />
          <CoursePageAdmissionProcess />
          <CoursePageJobs />
          <div className='content_card'>
            <h2 className='font-bold text-xl mb-4'>Faq</h2>
            <FaqCategory faqData={faqData} />
          </div>
          <CoursePageRelatedArticle allArticles={allArticles} />
        </div>
      </div></>
  )
}

export default CoursePage