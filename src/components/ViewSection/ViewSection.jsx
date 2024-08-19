import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Titel from '../Titel/Titel'
import './ViewSection.css'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import video_frame from '../../assets/Images/video-frame.jpg'
export default function ViewSection() {
  return (
    <section className='view' id='property-details'>
      <div className='v-title'>
        <Titel p={'VIDEO VIEW'} h2={'Get Closer View & Different Feeling'}/>
      </div>
      <div className='video'>
        <img src={video_frame} alt="video" />
        <span className='play'><FontAwesomeIcon icon={faCirclePlay} /></span>
      </div>
    </section>
  )
}
