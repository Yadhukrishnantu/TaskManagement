import {React , useEffect , useState} from 'react'
import axios from 'axios'
 import { Link } from 'react-router-dom';
 import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function Dashboard() {

    const [task,setTask]=useState([])


    const getTask=async ()=>{
      const response=await axios.get('http://localhost:8000/getAllTask')
      setTask(response.data.tasks)
    } 

  console.log(task);

 const handleDelete=async (id)=>  {
const result =await axios.delete('http://localhost:8000/deleteTask/'+id)
 alert(result.data.message)

//  to refresh table content
 getTask()
 } 

useEffect(()=>{
  getTask()
},[])

  return (
    <div>

<h2 className='text-center mt-4' >Task Management System</h2>


<div className='text-end mt-5 me-4'>
           <Link to ={'/add'}>
              <Button variant='info'><i class="fa-solid fa-person-circle-plus"></i>
               Add Task
               </Button>
           </Link>
        </div>
         <Table className='w-75 container border' striped bordered hover variant="dark" >
        <thead>
          <tr>
            
            <th> ID </th>
            <th> Title</th>
            <th>Category</th>
            <th>Action</th>
            
            
          </tr>
        </thead>
        <tbody>
          {
            task?.map(tsk=>(

              <tr>
            <td>{tsk.id}</td>
            <td>{tsk.title}</td>
            <td>{tsk.category}</td>
            <td>
<Link to={'edit/'+tsk.id}><Button className='me-2' variant="info"><i class="fa-solid fa-file-pen"></i>Edit</Button>{' '}</Link>
            <Link to={'view/'+tsk.id}><Button className='me-2' variant="success"> <i class="fa-solid fa-eye"></i>View</Button>{' '}</Link>
            <Button onClick={()=>handleDelete(tsk.id)}  className='me-2' variant="outline-danger"> <i class="fa-solid fa-trash"></i>Delete</Button>{' '}
            </td>

            </tr>
            ))
          }
          
          
          
        </tbody>
      </Table>
    </div>
  )
}

export default Dashboard