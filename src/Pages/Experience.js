import { School } from '@material-ui/icons'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#5e2159">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
           date="2013 - 2016"
           iconStyle={{ background: '#3e497a', color: '#fff' }}
           icon={<School />}
       >
       <h3 className='vertical-timeline-element-title'> Honeyland Colledge</h3>
       <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
           date="2013 - 2016"
           iconStyle={{ background: '#3e497a', color: '#fff' }}
           icon={<School />}
       >
       <h3 className='vertical-timeline-element-title'> Houdegbe North America University</h3>
       <p> University Law degree   </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
