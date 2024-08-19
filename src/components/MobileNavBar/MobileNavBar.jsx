import { navData, Logo } from "../../data/nav"
import { infoData, infoIcon } from '../../data/navData';
import './MobileNavBar.css'
import ScheduleBtn from "../ScheduleBtn/ScheduleBtn"
import Close from '../../assets/Images/xmark-solid.svg'

export default function MobileNavBar({ isOpen, toggleNavBar }) {
   
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
        <div className="nav-head head-side">
            <h3>{Logo}</h3>
            <a href=""  onClick={(e) => { e.preventDefault(); toggleNavBar(); }}><img className="close" src={Close} alt="close" /></a>
        </div>
         <ul className=' ul-side'>
            {navData.map(index =>
                {
                    return(
                        <li className=' li-side' key={index.id}>
                            <a className='nav-link' href={index.link}>{index.title}</a>
                        </li>
                    )
                }
            )}
            <ScheduleBtn/>
         </ul>
        </div>
        <div>
        <div className='div-1'>
            <div className='info info-side'>
                {infoData.map(i=>{
                    return(
                        <a href={i.href} key={i.id} className='info-link'>
                            <img src={i.icon} alt={i.infoTitle} className='info-icon' />
                            <span>{i.infoTitle}</span>
                        </a>
                    )
                })}
            </div>
        </div>
        <div className='icons side-icons'>
            {infoIcon.map(j=>
                {
                    return(
                        <div className='social-icon'  key={j.id}>
                            <a href={j.href} className='link'>
                                <img src={j.icon} alt={j.socIcon} />
                            </a>
                        </div>
                    )
                }
            )}
        </div>
        </div>
    </nav>
  )
}
