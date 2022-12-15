import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserForm() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)
  const {setNotification} = useStateContext()

  if(id) {
    
  }

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
    <div className='card animated fadeInDown'>
      {loading && (
        <div className='text-center'>
          Loading...
        </div>
      )}
      {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        {!loading && (
          <form onSubmit={onSubmit}>
            <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
            <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
            <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
            <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
            <button className="btn">Save</button>
          </form>
        )}
    </div>
    </>
  )
}

