import Home from './components/page/Home/Home'
import Page01 from './components/page/Page01/Page01'
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/page01' element={<Page01/>}/>
<Route path='/' element={<Navigate to='/home'/>} />
    </Routes>
   
  )
}

export default App
