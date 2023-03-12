import Home from './page/Home/Home'
import Page01 from './page/Page01/Page01'
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import Page02 from './page/Page02/Page02'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Page03 from './page/Page03/Page03'

function App() {
  const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
 firebase.initializeApp(firebaseConfig);
  return (
    <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/page01' element={<Page01/>}/>
<Route path='/Page02' element={<Page02/>}/>
<Route path='/Page03' element={<Page03/>}/>
<Route path='/' element={<Navigate to='/home'/>} />
    </Routes>
   
  )
}

export default App
