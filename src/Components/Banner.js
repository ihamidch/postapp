import React from 'react'
import data from './Data'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = () => {
    const navigate = useNavigate();

    const handleClick = ((data)=>{
      console.log(data,"row---")
      // localStorage.setItem("blog-data",JSON.stringify(data))
      if(data){
        navigate(`/BlogDetail/${data.id}`, { state: data });
      }
    })
  return (
    <div>
         <>
      <div className="container  d-flex mt-5">
        <div className="col-md-6 left ">
            <h2 className="fs-1 fw-bold my-xl-5 ">Articles for <br /><span className="text-success "> front-end devs</span></h2>
            <h3 className="cc"> on web performance, <br /> responsive web design and more</h3>
        </div>
        <div className="col-md-6 right">
            <img className="w-100 " src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGypJJpy6KoVEVGpBXMzTOoz28bilLONjl042Ae-v36YmxQ7ys" alt="" />
        </div>
      </div>
      {data.map((item, index) => (
        <div className="container" key={index}>
          <div className="row">
            <div className="col-md-12">
              <div className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  {/* Use Link to navigate to BlogDetail */}
                  {/* <Link to={`/BlogDetail/${index + 1}`} state={item}> Assuming index + 1 as an identifier */}
                    <button onClick={()=>handleClick(item)}>Read More</button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
    </div>
  )
}

export default Banner