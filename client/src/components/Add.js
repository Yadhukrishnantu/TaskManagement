import axios from 'axios';
import { React, useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate , Link } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  useEffect(()=>{
    setId(uuid().slice(0,3))
   },[])


   const addTask=async(e)=>{
    e.preventDefault()

    setId(uuid().slice(0,3));
    const body ={
      id,
      title,
      category
    
    }

    const result = await axios.post('http://localhost:8000/addTask',body)
  alert(result.data.message)
  // redirection to home page
  location('/')
  
  }
  // create a object for the hook
let location = useNavigate()
  return (
    <div>
   

   <Form style={{ background: 'grey', borderRadius: '8px' }} className='w-50 mt-5 mb-5 container border'>
        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control   type="Name"  value={title} 
          onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control   type="Name"  value={category} 
          onChange={(e)=>setCategory(e.target.value)} />
        </Form.Group>
        <Button onClick={(e)=>addTask(e)} className='mb-2 ' variant="info" type="button">
          Create
        </Button>

        </Form>
    </div>
  )
}

export default Add