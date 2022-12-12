import { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'

export default function DefaultLayout() {
    const {user, token, setUser, setToken, notification} = useStateContext()

    if(!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (e) => {
      e.preventDefault()
      axiosClient.post('/logout')
        .then(() => {
          setUser({})
          setToken(null)
        })
       
    }

    useEffect(() => {
      axiosClient.get('/user')
        .then(({data}) => {
          setUser(data)
        })
    }, [])

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>

          <div>
            {user.name}  &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
          </div>
        </header>
        <main>
          
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
