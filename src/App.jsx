import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar file/Navbar'
import Footer from './Footer file/Footer'

function App() {

  return (
    <>
      <div>
        <div>
          <div>
            <Navbar></Navbar>
          </div>
          <div >
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
