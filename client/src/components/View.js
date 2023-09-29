import axios from 'axios'
import {React,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function View() {

    const [task, setTask]=useState({})

    const params=useParams()
   
    const fetchTask=async ()=>{
      const result =await axios.get('http://localhost:8000/getAnTask/'+params.id)
     setTask(result.data.tasks);
    
  
    
      }
    //   console.log(task);
  
      useEffect(()=>{
        fetchTask()
      },[])
  return (
    <div className='container mt-5'>
       <ListGroup className='list-group-flush'>
      <ListGroup.Item> Id  : {task.id}</ListGroup.Item>
        <ListGroup.Item>Title  : {task.title}</ListGroup.Item>
        <ListGroup.Item> Category  : {task.category}</ListGroup.Item>
        

      </ListGroup>

      <Link to={'/'}><Button className='mb-3' variant="primary">Back </Button></Link>

    </div>
  )
}

export default View