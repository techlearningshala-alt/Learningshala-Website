import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import Link from 'next/link'

const CoursePageKeyHighlight = () => {
  return (
     <div className='content_card'>
    <CourseContentHeading title="Key Highlights" />
    <ul className='list-disc list-inside'>
      <li> <b>Flexibility:</b> Online degrees allow students to study at their own pace and from any location, providing greater convenience and accessibility.</li>
      <li> <b>Cost Savings:</b> Compared to traditional on-campus degrees, online programs often offer cost savings, as students can save on tuition fees, room and board, and other associated expenses.</li>
      <li><b>Global Opportunities:</b> Online degrees provide students with the opportunity to pursue higher education in countries with limited access to traditional education systems, opening up new career paths and global perspectives.</li>
      <li><b>Skill Development:</b> Engaging in online courses allows students to develop new skills, such as problem-solving, critical thinking, and communication abilities, which are highly valued in today&apos;s job market.</li>
      <li><b>Networking Opportunities:</b> Online degrees provide students with the chance to connect with like-minded peers, exchange ideas, and build a network of potential employers or collaborators.</li>
      <li><b>Continuous Learning:</b> The online format allows students to access course materials, participate in discussions, and receive feedback at any time, enabling them to stay engaged and committed to their studies.</li>  
    </ul>
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
    </div>
  )
}

export default CoursePageKeyHighlight