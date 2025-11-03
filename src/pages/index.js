import About from "@/components/custom/homepage/About";
import AllUniversitySection from "@/components/custom/homepage/allUniversitySection/AllUniversitySection";
import Banner from "@/components/custom/homepage/Banner";
import CourseSection from "@/components/custom/homepage/courseSection/CourseSection";
import CourseSectionMobile from "@/components/custom/homepage/courseSection/CourseSectionMobile";
import ExpertSlider from "@/components/custom/homepage/expert/ExpertSlider";
import MediaSlider from "@/components/custom/homepage/media/MediaSlider";
import ReelSlider from "@/components/custom/homepage/reels/ReelSlider";
import FaqCategory from "@/components/custom/shared/FaqCategory";
import MainHeading from "@/components/custom/shared/MainHeading";
import useWindowSize from "@/lib/use-window-size";
import { getFaqData, getMediaData, getMentorData, getTestimonialData } from "@/services/HomepageService";
import { getUniversityData } from "@/services/UniversitypageService";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export async function getStaticProps() {
  const mentorData = await getMentorData().then((response) => response?.data?.data?.data || []);
  const universitiesList = await getUniversityData().then((response) => response?.data?.data?.data || []);
  const mediaData = await getMediaData().then((response) => response?.data?.data?.data || []);
  const testimonialData = await getTestimonialData().then((response) => response?.data?.data?.data || []);
  const faqData = await getFaqData().then((response) => response?.data?.data?.data || []);

  return {
    props: {
      mentorData: mentorData,
      universitiesList: universitiesList,
      mediaData: mediaData,
      testimonialData: testimonialData,
      faqData: faqData,
    },
    revalidate: 300,
  };
}
export default function Home({mentorData,universitiesList, mediaData, testimonialData, faqData}) {
 
  const [loading, setLoading] = React.useState(true);
const size = useWindowSize();
  // console.log(faqData);
  const faqDatas = [
    {
      value: "item-1",
      question: "How should I judge if this course is actually right for me?",
      answer: "Look, you need to notice things which are beyond the syllabus. The right course should align with your career goals, learning style, and budget. Learningshala’s mentors don’t just match you to a program. They help you build a personalised “Career Blueprint” first. We understand your ambitions, skills, and the current job market to find a job that’s not just a good fit, but a strategic move. Don’t just pick a course, pick a direction. ",
    },
    {
      value: "item-2",
      question: "How do I know if a university's '100% placement' promise is real?",
      answer:
        "That’s one of the most important questions. Let’s try to break it down – “Placement Assistance” and “Guaranteed Placements” are completely different. Learningshala helps you cut through the marketing noise by providing verifiable data on alumni success, average starting salaries, and the specific companies that hire from each university. Our comparison tool includes “Alumni Success Score” for every program, so you’re making decisions based on real-world outcomes, not just promises.",
    },
    {
      value: "item-3",
      question: "What's the catch? Why are LearningShala's services free for all students?",
      answer:
        "No catch. Learningshala’s mission is to fix the broken & biased system of educational mentorship in India. We believe every student deserves access to honest expert advice without a price tag. Our platform has been born to eliminate bias from the Indian Education System.",
    },
    {
      value: "item-4",
      question: "What happens if I have some problems after I enroll?",
      answer:
        "Most platforms literally disappear once you pay the fees. Learningshala is different. We are your constant support system from your first query until the day you get your degree. Whether it’s a technical issue with your online classes, a question about your exam schedule, or a delay in receiving study materials, you have a single point of contact with LearningShala. ",
    },
    {
      value: "item-5",
      question: "How can I be sure I'm not overpaying for my degree?",
      answer:
        "We understand, it’s easy to get lost in complex fee structures and their hidden costs. LearningShala’s comparison tool includes a “Total Cost of Ownership” feature for every course, which includes exam fees, study material costs, and potential expenses.We also have a dedicated team that tracks and alerts you to scholarship opportunities and exclusive financial aid options (you might not find anywhere else). ",
    },
  ];
  React.useEffect(() => {
    if ( mentorData && mentorData.length > 0 && mediaData && mediaData.length > 0 && testimonialData && testimonialData.length > 0 && faqData && faqData.length > 0 && universitiesList && universitiesList.length > 0) {
      setLoading(false);
    }
  }, [ mentorData, mediaData, testimonialData, faqData, universitiesList]);

  return (
    <div className={`${plusJakartaSans.className}`}>
      <main>

        <Banner screenSize={size} />
        <MainHeading title="Find your next degree to power your career" className="text-center" />
        {size && size.width > 991 ? <CourseSection screenSize={size} /> : <CourseSectionMobile screenSize={size} />}
        <ExpertSlider mentorData={mentorData || []} loading={loading} />
        <About loading={loading} />
        <AllUniversitySection loading={loading} universitiesList={universitiesList || []} />
        <ReelSlider testimonialData={testimonialData || []} loading={loading} />
        <MediaSlider mediaData={mediaData || []} loading={loading} />
        <div className="container sec_mb"><div className="max-w-2xl mx-auto">
          <div className="text-center">
            <MainHeading title="The LearningShala Rulebook – FAQs" />
          </div><FaqCategory faqData={faqData || []} loading={loading} screenSize={size} />    </div></div>

      </main>
    </div>
  );
}
