import { Link } from 'react-router-dom';
import './BtnCard.css';

export default function BtnCard({ text, id }) {
  return (
    <Link to={'/Task_2/propertydetails'}>
      <button className='btnCard'>
        {text}
      </button>
    </Link>
  );
}
