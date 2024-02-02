import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoader(false);
      });
  }, []);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div>
      <div className="container d-flex">
        <div className="col-md-6 left">
          <h2 className="fs-1 fw-bold my-xl-5">Articles for <br /><span className="text-success"> front-end devs</span></h2>
          <h3 className="cc"> on web performance, <br /> responsive web design and more</h3>
        </div>
        <div className="col-md-6 right">
          <img className="w-100 " src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGypJJpy6KoVEVGpBXMzTOoz28bilLONjl042Ae-v36YmxQ7ys" alt="" />
        </div>
      </div>
      <div className="container">
        <Link to="/Add" className="text-decoration-none text-dark">
          <button className="btn btn-primary">Add</button>
        </Link>
        {/* Pass data to Edit page using state */}
        

        {data.map((blog) => {
          const { id, title, body, userId } = blog;
          return (
            <div key={id} className='container'>
              <Link to={`/BlogDetail/${id}`} className="text-decoration-none text-dark">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-2">
                      <img className="w-100" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGypJJpy6KoVEVGpBXMzTOoz28bilLONjl042Ae-v36YmxQ7ys" alt="" />
                    </div>
                    <div className="col-md-10">
                      <h3 className="fs-3 fw-bold">{title}</h3>
                      <p className="fs-5">{body}</p>
                      <p className="fs-5">ID: {id}</p>
                      <p className="fs-5">User ID: {userId}</p>
                    </div>
                  </div>
                </div>
              </Link>
              <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
              <Link to={`/Edit/${blog.id}`} state={{data2:blog}} className="text-decoration-none text-dark">
          <button className="btn btn-primary mx-2">Edit</button>
        </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
