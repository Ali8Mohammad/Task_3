import './FiltrBtn.css'

export default function FiltrBtn() {
  const btn = [
    {
      button: 'Appartment'
    },
    {
      button: 'Villa House'
    },
    {
      button: 'Penthouse'
    }
  ]
  return (
    <div className='filter-btn'>
      {btn.map((item, index) => (
        <button key={index}>
            {item.button}
        </button>
      ))}
    </div>
  )
}
