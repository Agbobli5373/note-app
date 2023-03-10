import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const createNote = ({setNotes}) => {
  const [title , setTitle] = useState('')
  const [details , setDetails] = useState('')
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title && details){
        const note = {
          id : uuid(),
          title,
          details,
          date
        }
        //add this note to Notes array
        setNotes(prevNotes => [note ,...prevNotes])
        //redirect to homepage
        navigate('/')
        
    }
    
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'>
          <IoIosArrowBack/>
        </Link>
        <button className='btn lg primary' onClick={handleSubmit}>Save</button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
         <input type="text" value={title} id="" placeholder='Title' autoFocus onChange={(e)=>setTitle(e.target.value)}/>
         <textarea rows="30" value={details} placeholder='Note details.....' onChange={(e)=>setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default createNote