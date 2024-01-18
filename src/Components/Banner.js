import React from 'react'
import {data,students} from './Data'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = () => {
    const navigate = useNavigate();

    const handleClick = (data, studentData) => {
      console.log(data, studentData, "row---");
      if (data && studentData) {
        navigate(`/BlogDetail/${data.id}`, { state: data, state1: studentData });
      }
    };
    
  return (
    <div>
    {data.map((item, index) => (
      <div className="container" key={index}>
        <div className="row">
          <div className="col-md-12">
            <div className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
                <button onClick={() => handleClick(item, students)}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    
    {
      students.map((items, index) => (
        <div className="container" key={index}>
          <div className="row">
            <div className="col-md-12">
              <div className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.username}</p>
                  <button onClick={() => handleClick(items, students)}>BlogDetail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
   </div> 
  )
  
}

export default Banner
