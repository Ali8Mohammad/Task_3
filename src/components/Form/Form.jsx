import './Form.css'
import BtnCard from '../BtnCard/BtnCard'

export default function Form() {
  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your Name...' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Your E-mail...' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject...' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Your Message' }
  ];

  return (
    <form className='form-c'>
      {formFields.map(field => (
        <div key={field.id} className='form-group'>
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea id={field.id} placeholder={field.placeholder}></textarea>
          ) : (
            <input id={field.id} type={field.type} placeholder={field.placeholder} />
          )}
        </div>
      ))}
      <BtnCard text={'Send Message'} />
    </form>
  )
}
