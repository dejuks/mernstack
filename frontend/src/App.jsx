import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Students from './Students'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Students />}/>
      <Route path='/create' element={<AddStudent />}/>
      <Route path='/edit/:id' element={<EditStudent />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
