import React from 'react'
import CourseContentHeading from './CourseContentHeading'
import Link from 'next/link'

const CoursePageWhyChoose = () => {
    return (
        <div className='content_card'> 
            <CourseContentHeading title="Why Choose" />
            <p>An online degree is an academic qualification—like an associate&apos;s, bachelor&apos;s, or master&apos;s degree—that is earned by completing coursework and assignments primarily or entirely online through an internet-connected computer, rather than attending classes at a physical campus. These programs offer flexibility by allowing students to study on their own schedules and from any location, using digital platforms, virtual classes, and online learning management systems to interact with faculty and peers. When earned from a recognized and accredited institution, an online degree holds the same academic value as its traditional, on-campus counterpart.</p>
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

export default CoursePageWhyChoose