import React from 'react'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Note from './pages/note'
import CreateNote from './pages/createNote'
import EditNote from './pages/editNote'
//import dummyNote from './dummy_notes'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [notes ,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },
  [notes])
  return (
    <main id="app">
       <BrowserRouter>
             <Routes>
              <Route path='/' element= {<Note notes={notes}/>} />
              <Route path='/create-note' element= {<CreateNote setNotes={setNotes}/>} />
              <Route path='/edit-note/:id' element= {<EditNote notes={notes} setNotes={setNotes}/>}  />
             </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
