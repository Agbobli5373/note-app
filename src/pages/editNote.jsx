import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react'
import useCreateDate from '../components/useCreateDate'

const editNote = ({notes,setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item)=>item.id == id);
  const [title , setTitle ] = useState(note.title);
  const [details ,setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  
  const handleForm =(e)=>{
    e.preventDefault();
   if(title && details){
     const newNote = {...note,title,details,date}
     const newNotes = notes.map(item=>{
      if(item.id ==id){
         item = newNote
      }
      return item
     })
     setNotes(newNotes)
    
   }
    navigate('/')
  }

  const handleDelete =()=>{
    if(window.confirm('Are you sure you want to delete ?')){
      const newNotes =notes.filter(item=> item.id != id);
      setNotes(newNotes);
      navigate('/')
    }
  }
 
  return (
    <section>
    <header className="create-note__header">
      <Link to='/' className='btn'>
        <IoIosArrowBack/>
      </Link>
      <button className='btn lg primary' onClick={handleForm}>Save</button>
      <button className='btn lg danger' onClick={handleDelete}><RiDeleteBin5Line/></button>
    </header>
    <form action="" className="create-note__form" onSubmit={handleForm}>
       <input type="text" placeholder='Title' autoFocus value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <textarea rows="30" placeholder='Note details.....' value={details}onChange={(e)=>setDetails(e.target.value)} ></textarea>
    </form>
  </section>
  )
}

export default editNote