import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from './componenets/NavBar'
const App = ()=>{
  return (
       <div>
         <NavBar />
         <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourites' element={<Favourites />} />
          </Routes>
         </main>
       </div>
  )
}



export default App
