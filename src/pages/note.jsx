import React, { useEffect } from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsPlusLg} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import NoteItem  from '../components/noteItem'
import Footer from '../components/footer'
import { useState } from 'react'

const note = ({notes}) => {
  const [showSearch , SetShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filterNote,setFilterNote] = useState(notes);

  const handleSearch =() =>{
    setFilterNote(notes.filter(note=>{
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note ;
      }
    }))
  }

  useEffect(handleSearch,[text])
  return (
    <section>
      <header className='notes__header'>
        {!showSearch && <h2>My Note</h2>}
        {showSearch && <input type='text' value={text} onChange={(e)=> {setText(e.target.value); handleSearch();}} autoFocus placeholder='Keyword.. '/> }
        <button className='btn' onClick={()=>SetShowSearch(prevState => !prevState)}>
         {showSearch ? <MdClose/> : <CiSearch/>}</button>
      </header>
      <div className="notes__container">
          {filterNote.length == 0 && <p className='empty__notes'>No Note found</p>}
          {
            filterNote.map(note => <NoteItem key={note.id} note={note}/>)
          }
      </div>
       <Footer/>
      <Link className='btn add__btn' to='/create-note' ><BsPlusLg/> </Link>
    </section>
  )
}

export default note