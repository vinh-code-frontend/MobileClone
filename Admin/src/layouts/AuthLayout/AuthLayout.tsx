import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <div>AuthLayout</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
