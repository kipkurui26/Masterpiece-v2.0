import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const AppShell = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default AppShell