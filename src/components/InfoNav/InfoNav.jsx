import './InfoNav.css';
import { infoData, infoIcon } from '../../data/navData';

export default function InfoNav() {
  return (
    <section className='InfoNav'>
      <div className='div-1'>
        <div className='info'>
          {infoData.map((item) => (
            <a href={item.href} key={item.id} className='info-link'>
              <img src={item.icon} alt={item.infoTitle} className='info-icon' />
              <span>{item.infoTitle}</span>
            </a>
          ))}
        </div>
      </div>
      <div className='icons'>
        {infoIcon.map((item) => (
          <div className='social-icon' key={item.id}>
            <a href={item.href} className='link'>
              <img src={item.icon} alt={item.socIcon} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
