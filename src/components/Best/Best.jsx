import './Best.css'
import ServesList from '../ServesList/ServesList'
import Titel from '../Titel/Titel'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import FiltrBtn from '../FiltrBtn/FiltrBtn'
import deal from '../../assets/Images/deal-01.jpg'
export default function Best() {
  const bestSection = 
    {
      title: 'Extra Info About Property',
      par: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.',
      par2:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.'
    }
  
  return (
    <section className='best'>
        <div className='best-head'>
          <div className='best-title'>
              <Titel p={'BEST DEAL'} h2={'Find Your Best Deal Right Now!'}/>
          </div>
          <FiltrBtn/>
        </div>
        <div className='best-content'>
          <ServesList page={false}/>
          <div>
             <img className='content-img' src={deal} alt="" />
          </div>
          <div className='text'>
              <h3>{bestSection.title}</h3>
              <p>{bestSection.par}</p>
              <p>{bestSection.par2}</p>
          </div>
        </div>
        <div className='btn-left'>
          <ScheduleBtn/>
        </div>

    </section>
  )
}
