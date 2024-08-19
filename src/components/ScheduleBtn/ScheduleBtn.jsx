import './ScheduleBtn.css'
import schedule from '../../assets/Images/ScheduleBtn.svg'

export default function ScheduleBtn() {
  return (
    <div className='button'>
        <div className='btnIcon'>
            <img src={schedule} alt="Schedule" />
        </div>
        <span>Schedule a visit </span>
    </div>
  )
}
