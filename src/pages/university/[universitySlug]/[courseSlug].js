import Toc from "@/components/universitypage/Toc";
import UniversityBanner from "@/components/universitypage/UniversityBanner";
import universitySectionMap from "@/lib/universitySectionMap";
import React from "react";

const UniversityCourse = () => {

  const universityData = {
    basicInfo: {
      universityLogo:
        "/images/university_list/1_amity-online-university-logo.jpg",
      universityName: "Amity University Online",
      universityCourseName: "BBA",
      universityCourseSlug: "/bba",
      universityLocation: "Noida",
      universityBrochure: "/images/brochure/amity-brochure.pdf",
      updatedDate: "Sep 23 2025",
      authorName: "chandan singh",
    },

    bannerData: {
      banner: "/images/university/banner.webp",
      videoID: "cLoXQb5M6oI",
      videoTitle: "Recent Video",
    },

    sections: [
      {
        id: "latest-updates",
        title: "Latest Updates",
        component: "UniversityLatestUpdate",
        props: {
          content: `<p>
                NIRF 2025 Rankings are out. As per the latest NIRF 2025 rankings,
                Amity University Noida ranks #30 under the category
                &apos;Engineering&apos;.
              </p>
              <p>
                Amity University Noida admissions 2025 are open for all UG, PG,
                and Diploma courses. Interested candidates can check and apply
                through the official website. A few more updates are given below:
              </p>
              <ul>
                <li>
                  The CMAT 2026 registration window for admission to the MBA,
                  PGDM, and MMS courses is anticipated to open in the second week
                  of Nov 2025.
                </li>
                <li>
                  The GPAT 2025 counselling process for admission to the MPharma
                  course is expected to begin soon.
                </li>
                <li>
                  The MAT September 2025 registration process is now open for both
                  PBT and CBT modes. The last date to register for PBT is{" "}
                  <strong>Sep 15, 2025</strong>, and for CBT is{" "}
                  <strong>Sep 22, 2025</strong>. Furthermore, the MAT 2025 PBT and
                  CBT exams will be held on{" "}
                  <strong>Sep 21, 2025, and Sep 28, 2025</strong>, respectively.
                </li>
              
              </ul>`,
        },
      },
      {
        id: "about",
        title: "About",
        component: "UniversityDesc",
        props: {
          content:
            "Online MBA is a two-year degree programme in business administration designed to provide a flexible learning experience tailored to learners busy schedules. More than UGC-approved colleges in India offer the best online MBA programs. Online MBA has emerged as a popular alternative to a traditional MBA.",
          videoID: "cLoXQb5M6oI",
          videoTitle: "About Recent Video",
        },

      },
      {
        id: "why-choose",
        title: "Why Choose",
        component: "UniversityWhyChoose",
        props: {
          content:
            `<p>Amity University Hyderabad provides placements to its students in various companies. As per the Amity University Hyderabad placements conducted recently, the Amity University Hyderabad highest salary package offered is Rs 2 crore per annum with over 1,300 companies visiting the campus. During the Amity University Hyderabad placements, 13,000 students were placed in companies according to their fit.</p>`,
          gridContent: [
            {
              title: "Online Degree Acceptance",
              desc: "As per the Amity University Hyderabad placements conducted recently, the Amity University Hyderabad highest salary package offered is Rs 2 crore per annum with over 1,300 companies visiting the campus 1",
              bgColor: "#f0f8ff",
            },
            {
              title: "Value of Online Degree",
              desc: "As per the Amity University Hyderabad placements conducted recently, the Amity University Hyderabad highest salary package offered is Rs 2 crore per annum with over 1,300 companies visiting the campus 2",
              bgColor: "#fff8dc",
            },
            {
              title: "Quality of Education",
              desc: "As per the Amity University Hyderabad placements conducted recently, the Amity University Hyderabad highest salary package offered is Rs 2 crore per annum with over 1,300 companies visiting the campus 3",
              bgColor: "#f0fff0",
            },
          ],
        },
      },
      {
        id: "popular-courses", title: "Popular Courses", component: "UniversityCourses",
        props: {
          coursesList: [
            {
              name: "Online MBA",
              numberOfSpecialization: "20",
              fees: "20 L",
              mode: "Online",
              duration: "36 months",
              link: "/mba",
              img: "/images/university/c1.webp",
            },
            {
              name: "Online MCA",
              numberOfSpecialization: "20",
              fees: "16 L",
              mode: "Online",
              duration: "24 months",
              link: "/mca",
              img: "/images/university/c2.webp",
            },
            {
              name: "Online Bcom",
              numberOfSpecialization: "12",
              fees: "12 L",
              mode: "Online",
              duration: "36 months",
              link: "/bcom",
              img: "/images/university/c3.webp",
            },
            {
              name: "Online BBA",
              numberOfSpecialization: "5",
              fees: "10 L",
              mode: "Online",
              duration: "28 months",
              link: "/bba",
              img: "/images/university/c1.webp",
            },
            {
              name: "Online MCA",
              numberOfSpecialization: "20",
              fees: "16 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c2.webp",
            },
            {
              name: "Online Bcom",
              numberOfSpecialization: "12",
              fees: "12 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c3.webp",
            },
            {
              name: "Online BBA",
              numberOfSpecialization: "5",
              fees: "10 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c1.webp",
            },
            {
              name: "Online Bcom",
              numberOfSpecialization: "12",
              fees: "12 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c3.webp",
            },
            {
              name: "Online BBA",
              numberOfSpecialization: "5",
              fees: "10 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c1.webp",
            },
            {
              name: "Online Bcom",
              numberOfSpecialization: "12",
              fees: "12 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c3.webp",
            },
            {
              name: "Online BBA",
              numberOfSpecialization: "5",
              fees: "10 L",
              mode: "Online",
              duration: "36 months",
              link: "/",
              img: "/images/university/c1.webp",
            },
          ]
        }
      },
      {
        id: "key-benefits", title: "Key Highlights", component: "UniversityKeyBenefits",
        props: {
          content: ` <ul>
            <li>
                <p className='font-bold'>Enhances Readability</p>
                <p>In an age where people skim through content rather than reading it in-depth, bullet points have become an essential tool for improving readability. By using short, clear statements, bullet points allow the reader to quickly absorb key information without getting bogged down by long paragraphs.</p>
            </li>
            <li>
                <p className='font-bold'>Organizes Information</p>
                <p>Bullet points help structure content in a logical and organized manner. Instead of presenting a block of dense text, they divide the information into bite-sized chunks, making it easier to follow. This organizational aspect is crucial when designing user-friendly websites, blogs, or presentations.</p>
            </li>
            <li>
                <p className='font-bold'>Improves User Engagement</p>
                <p>Users are more likely to engage with content that is visually appealing and easy to navigate. Bullet points add variety to the layout and can highlight important aspects of the text. </p>
            </li>
            <li>
                <p className='font-bold'>Makes Content Scan-Friendly</p>
                <p>People often scan web pages or documents to find relevant information quickly. Bullet points naturally draw attention and stand out, making them ideal for catching the reader’s eye. </p>
            </li>
          </ul>`,

        }
      },
      { id: "admission-process", title: "Admission Process", component: "UniversityAdmissionProcess" },
      {
        id: "fees-detail", title: "Fee Details", component: "UniversityFeeDetail",
        props: {
          content: `  <p>Amity University Hyderabad has been offering students various courses at undergraduate and postgradu... Read more at: https://www.careers360.com/university/amity-university-hyderabad/courses</p>
      <p>At PG level, Amity University Hyderabad courses include MTech, MBA and MCA which are offered for 2 y... Read more at: https://www.careers360.com/university/amity-university-hyderabad/courses</p>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>1st Semester Fees&nbsp;</th>
            <th>Eligibility Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <Link href="/">BBA</Link>
              </p>
            </td>
            <td>
              <p>Rs 1,45,000</p>
            </td>
            <td>
              <p>Minimum 50% aggregate in 10+2</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <Link href="/">BCA</Link>
              </p>
            </td>
            <td>
              <p>Rs 99,000</p>
            </td>
            <td>
              <p>
                50% in 10+2 with Maths/ Computer Science/ Informatic
                Practice/Computer Applications/Multimedia &amp; Web
                Technology/Data Management application/Web
                Application/Information Technology
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <Link href="/">BTech CSE</Link>
              </p>
            </td>
            <td>
              <p>Rs 1,91,000</p>
            </td>
            <td>
              <p>
                Minimum 55% aggregate for Physics, Chemistry &amp; Math (PCM) in
                10+2
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <Link href="/">MBA</Link>
              </p>
            </td>
            <td>
              <p>Rs 2,60,000</p>
            </td>
            <td>
              <p>Graduation (min 50%) &amp; 10+2 ( min 50%)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <Link href="/">MCA</Link>
              </p>
            </td>
            <td>
              <p>Rs 1,18,000</p>
            </td>
            <td>
              <p>
                BCA / Graduation with Maths/Graduation + Maths at 10+2 level
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <Link href="/">MTech</Link>
              </p>
            </td>
            <td>
              <p>Rs 72,000</p>
            </td>
            <td>
              <p>B.Tech. / MCA or M.Sc. in CS/IT/Phy/Math/Statistics</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><span className="font-bold">Note:</span> Candidates have to pay the fees in instalments. ... Read more at: https://www.careers360.com/university/amity-university-hyderabad/courses</p>`,
        }
      },
      {
        id: "approval-logo", title: "University Approval Logo", component: "UniversityApprovalLogos",
        props: {
          universityLogo:
            "/images/university_list/1_amity-online-university-logo.jpg",
          universityName: "Amity University Online",
          universityApprovals: [

            {
              logo: "/images/approvals/a1.jpg",
              name: "wes",
              content:
                "WES To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a2.png",
              name: "aicte",
              content:
                "AICTE To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a3.webp",
              name: "nirf",
              content:
                "NIRF To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a4.jpg",
              name: "ugc deb",
              content:
                "UGC DEB To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a1.jpg",
              name: "wes",
              content:
                "WES To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a2.png",
              name: "aicte",
              content:
                "AICTE To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a3.webp",
              name: "nirf",
              content:
                "NIRF To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },
            {
              logo: "/images/approvals/a4.jpg",
              name: "ugc deb",
              content:
                "UGC DEB To ensure WES approval for online courses, verify the course is from a university recognized by WES and approved by the University Grants Commission (UGC) in India. Check the institution's recognition on the official WES website using the Degree Equivalency Tool or by contacting WES directly. Institutions like IGNOU and Amity University are often recognized, but it's crucial to confirm the specific program's status.",
            },

          ],
        }
      },
      {
        id: "placement-detail", title: "Placements Details", component: "UniversityPlacement",
        props: {
          content: `<p>Amity University Hyderabad provides placements to its students in various companies. As per the Amity University Hyderabad placements conducted recently, the Amity University Hyderabad highest salary package offered is Rs 2 crore per annum with over 1,300 companies visiting the campus. During the Amity University Hyderabad placements, 13,000 students were placed in companies according to their fit.</p><p>recruiters include Aditya Birla Group, Bata, Airtel, BOSCH, Amway, Boeing, Capgemini, Cipla, Coca-Cola, Edelweiss, EY, Genpact, Google, Jio, HP, IBM, Kotak Mahindra, Paytm, Reliance, Pepsi and more. More details regarding the Amity University Hyderabad placements are available below.</p>`,
          placementPartners: [
            {
              logo: "/images/placement/accenture.webp",
              name: "Accenture",
            }
            ,
            {
              logo: "/images/placement/amazon.webp",
              name: "Amazon",
            }
            ,
            {
              logo: "/images/placement/apple.webp",
              name: "Apple",
            }
            ,
            {
              logo: "/images/placement/ey.webp",
              name: "EY",
            }
            ,
            {
              logo: "/images/placement/google.webp",
              name: "Google",
            }
            ,
            {
              logo: "/images/placement/infosys.webp",
              name: "Infosys",
            }
            ,
            {
              logo: "/images/placement/JP_Morgan.webp",
              name: "JP Morgan",
            }
            ,
            {
              logo: "/images/placement/kpmg.webp",
              name: "KPMG",
            }
            ,
            {
              logo: "/images/placement/samsung.webp",
              name: "Samsung",
            }
          ]


        },
      },
      { id: "scholarship-program", title: "Scholarships Program", component: "UniversityScholarship",
        props: {
          content: `  <p>Scholarship cum Fast Track Admission: (On admission Scholarship)</p>
      <p>
        Scholarships in academic fees for the first year of the program will be
        offered to the candidates of class XII who appeared in the years 2024 &
        2025. Following are the scholarships offered as per scored percentages
        in 2024 & 2025
      </p>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Eligibility &amp; Condition</th>
            <th>Scholarship</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>
                <b>Scholarship Based on CUET- 2024 for UG Programs</b>
              </span>
            </td>
            <td>
              <span className="d-block">
                {" "}
                1) 85% XII %* (2024), 95 percentile CUET Percentile Score{" "}
              </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <b>Sports Scholarship</b>
              </span>
            </td>
            <td>
              <span className="d-block"> 1) International Participants </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <b>
                  Scholarship for B.Tech. Programs (Based on JEE Score- 2024 and
                  Class XII-2024
                </b>
              </span>
            </td>
            <td>
              <span className="d-block">
                {" "}
                1) 95% &amp; above Aggregate in XII (CBSE/ISC Only){" "}
              </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <span className="font-bold">Note(s):</span>
      </p>
      <ol>
        <li>
          The applicant is required to fulfil Program-Specific Eligibility.
        </li>
        <li>
          The percentage will be calculated based on the eligibility prescribed
          for specific subjects of the program to which the student is seeking
          admission.
        </li>
        <li>
          Limited Scholarship seats are available, which will be offered on
          first-cum-first-serve basis.
        </li>
        <li>
          Direct admission will be offered based on CLAT scores of 75% -89.99%.
        </li>
        <li>
          This scholarship is valid for 1st year only. No continuation of this
          scholarship.
        </li>
      </ol>`,
        }
       },
      { id: "sample-certificate", title: "Sample Certificate", component: "UniversitySampleCertificate",
        props: {
          content: `  <ul>
            <li>
                <p>In an age where people skim through content rather than reading it in-depth, bullet points have become an essential tool for improving readability. By using short, clear statements, bullet points allow the reader to quickly absorb key information without getting bogged down by long paragraphs.</p>
            </li>
            <li>
                <p>Bullet points help structure content in a logical and organized manner. Instead of presenting a block of dense text, they divide the information into bite-sized chunks, making it easier to follow. This organizational aspect is crucial when designing user-friendly websites, blogs, or presentations.</p>
            </li>
         
          </ul>`,
          sampleImg: "/images/sample-certificate/amity-online-new-sample-degree.webp",
        }
       },
      { id: "university-faculties", title: "University Faculties", component: "UniversityFaculties",
        props: {
          faculties : [
        {
          name: "Vinay",
          img: "/images/faculties/f1.png",
          university:
            "/images/university_list/3_chandigarh-online-university-logo.jpg",
          desc: "I was able to learn Graphic Designing Program with my ongoing job & grabbed my opportunity to work as a professional designer. To connect with me, answer few basic questions ",
          place: "/images/homepage/company/growthtrack.jpg",
        },
        {
          name: "Vicky",
          img: "/images/faculties/f2.png",
          university:
            "/images/university_list/10_Lovely-Professional-University-Online-logo.jpg",
          desc: "After investing my 2 years in NEET prep after 12th I was not able to crack it. Thanks to I got backed up with my online B.Com degree. To connect with me, answer few basic questions",
          place: "/images/homepage/company/hdfc.png",
        },
        {
          name: "Varun",
          img: "/images/faculties/f3.png",
          university:
            "/images/university_list/10_Lovely-Professional-University-Online-logo.jpg",
          desc: "I got myself upskilled with online certificate programs & got promoted to a managerial role.’s mentors helped me take the right decision. ",
          place: "/images/homepage/company/nykaa.jpg",
        },
        {
          name: "Shubham",
          img: "/images/faculties/f4.png",
          university:
            "/images/university_list/3_chandigarh-online-university-logo.jpg",
          desc: "Got promoted as a senior manager after earning an online MBA degree.’s mentors helped me take the right decision.",
          place: "/images/homepage/company/livspace.jpg",
        },
        {
          name: "Shubham Sinha",
          img: "/images/faculties/f5.png",
          university: "/images/university_list/8_Jain-University-logo.jpg",
          desc: "From a teacher to a product designer. made this switch possible for me! ",
          place: "/images/homepage/company/Salesforce.webp",
        },
     
      ]
        }
       },
      { id: "university-Emi", title: "University Emi", component: "UniversityEmi",
        props: {
          content: `  <p>
        In an age where people skim through content rather than reading it
        in-depth, bullet points have become an essential tool for improving
        readability. By using short, clear statements, bullet points allow the
        reader to quickly absorb key information without getting bogged down by
        long paragraphs.
      </p>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Eligibility &amp; Condition</th>
            <th>Scholarship</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>
                <b>Scholarship Based on CUET- 2024 for UG Programs</b>
              </span>
            </td>
            <td>
              <span className="d-block">
                {" "}
                1) 85% XII %* (2024), 95 percentile CUET Percentile Score{" "}
              </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <b>Sports Scholarship</b>
              </span>
            </td>
            <td>
              <span className="d-block"> 1) International Participants </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <b>
                  Scholarship for B.Tech. Programs (Based on JEE Score- 2024 and
                  Class XII-2024
                </b>
              </span>
            </td>
            <td>
              <span className="d-block">
                {" "}
                1) 95% &amp; above Aggregate in XII (CBSE/ISC Only){" "}
              </span>
            </td>
            <td>
              <span>100%</span>
            </td>
          </tr>
        </tbody>
      </table>`,
      emiPartners : [
     {  name:"Fibe India",
       img:"/images/loan/fibe-india.svg",},

       { name:"Lazy",
       img:"/images/loan/lazy.svg",},
       { name:"MoneyView",
       img:"/images/loan/moneyview.svg",}
      ],
        }
       },
      { id: "university-reviews", title: "What Student Say", component: "UniversityReviews",
        props:{
          allReviews : [
    {
      name: "Mohit",
      value: 4,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    },
    {
      name: "Rohit",
      value: 3,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    },
    {
      name: "Akash",
      value: 5,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    }, {
      name: "Mohit",
      value: 1,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    },
    {
      name: "Rohit",
      value: 3,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    },
    {
      name: "Akash",
      value: 3,
      content:
        "Facilities and infrastructure are not as good as expected by students with the name of Amity. Most of the ACs in classrooms, labs, and the library are not working, and the chairs for students are not comfortable. After 25–30 minutes, they start to cause pain in your back. Also, the Wi-Fi is very bad. Hostel rooms are quite good but have lots of restrictions, and the mess food is not worth the money. They do not have any type of dedicated coaches for sports to support students in their games.",
    },
  ]
        }
       },
      { id: "university-latest-articles", title: "University Latest Articles", component: "UniversityLatestArticles",
        props:{
          allArticles : [
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
        }
       },
      { id: "university-Other-popular-colleges", title: "Other Popular Universities", component: "UniversityOtherPopularColleges",
        props: {
          otherUniversityList : [
    {
      name: "Amity Online University",
      image: "/images/university_list/1_amity-online-university-logo.jpg",
      courseCount: "23",
      category: "top-ranked",
      link:"/university/amity-online-university",
    },
    {
      name: "Chandigarh Distance University",
      image:
        "/images/university_list/2_chandigarh-distance-university-logo.jpg",
      courseCount: "23",
      category: "distance-learning",
      link:"/university/chandigarh-distance-university",
    },
    {
      name: "Chandigarh Online University",
      image: "/images/university_list/3_chandigarh-online-university-logo.jpg",
      courseCount: "23",
      category: "online",
      link:"/university/chandigarh-online-university",
    },
    {
      name: "Datta Meghe Institute of Higher Education",
      image:
        "/images/university_list/4_datta-meghe-institute-of-higher-education-online-logo.webp",
      courseCount: "23",
      category: "top-ranked",
      link:"/university/datta-meghe-institute-of-higher-education",
    },
    {
      name: "Dy Patil Vidyapeeth University",
      image:
        "/images/university_list/5_dy-patil-vidyapeeth-university-online.jpg",
      courseCount: "23",
      category: "medical",
      link:"/university/dy-patil-vidyapeeth-university",
    },
    {
      name: "GLA University",
      image: "/images/university_list/6_GLA-University-Online-logo.jpg",
      courseCount: "23",
      category: "engineering",
      link:"/university/gla-university",
    },


  ]
        }
       },
      { id: "university-faq", title: "Faqs", component: "UniversityFaq",
        props: {
           faqData: [
      {
        category: "Admission",
        slug: "admission",
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
        slug: "fees",
        items: [
          {
            id: "3",
            question: "How can I be sure I'm not overpaying for my degree?",
            answer:
              "Our comparison tool shows the ‘Total Cost of Ownership’ including hidden fees.",
          },
        ],
      },
      {
        category: "Certificate",
        slug: "certificate",
        items: [
          {
            id: "4",
            question: "Will I get a government-recognized certificate?",
            answer: "Yes. All programs listed on Learningshala are UGC-approved.",
          },
        ],
      },
      {
        category: "EMI",
        slug: "emi",
        items: [
          {
            id: "5",
            question: "Can I pay my fees in EMI?",
            answer: "Yes, we help you find flexible EMI options.",
          },
        ],
      },
    ],
        }
       },
    ],
  };


  return (
    <div>
      <UniversityBanner universityData={universityData} />
      <div className="bg-gray-100 py-10 sec_mb">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3"></div>
            <div className="col-span-9">
              <p className="mb-3 text-sm">
                Updated on{" "}
                <span className="font-bold">{universityData.basicInfo.updatedDate}</span> by{" "}
                {universityData.basicInfo.authorName}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <Toc sections={universityData.sections} />
            </div>
            <div className="col-span-9">
              {universityData.sections.map(({ id, title, component, ...props }) => {
                const Component = universitySectionMap[component];
                if (!Component) {
                  console.warn(`⚠️ Component not found for section: ${component}`);
                  return null;
                }
                return <Component key={id} id={id} title={title} universityData={universityData} {...props} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCourse;
