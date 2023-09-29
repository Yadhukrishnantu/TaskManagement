import axios from 'axios';
import {React , useEffect , useState }from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams ,useNavigate } from 'react-router-dom';

function Edit() {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const params = useParams()

  const fetchTask=async ()=>{
    const result =await axios.get('http://localhost:8000/getAnTask/'+params.id)
    console.log(result.data.task);

 setId(result.data.tasks.id)
setTitle(result.data.tasks.title)
setCategory(result.data.tasks.category)
  }
const location =useNavigate()


  const handleUpdate=(e)=>{
    e.preventDefault()

    const body={
      id,
      title,
      category
      
    }

   const result = axios.post('http://localhost:8000/editTask',body)
   console.log(result);
  //  alert(result.data.message)
  location('/')
  }
 

  useEffect(()=>{
    fetchTask()
  },[])
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
        <Button onClick={(e)=>handleUpdate(e)} className='mb-2 ' variant="info" type="button">
          Update
        </Button>

        </Form>

    </div>
  )
}


export default Edit