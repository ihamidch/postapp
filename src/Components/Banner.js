import React from 'react';
import data from './Data';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  const [blogs, setBlogs] = React.useState(data);

  return (
    <div>
      <>
        <div className="container d-flex">
          <div className="col-md-6 left">
            <h2 className="fs-1 fw-bold my-xl-5 ">Articles for <br /><span className="text-success "> front-end devs</span></h2>
            <h3 className="cc"> on web performance, <br /> responsive web design and more</h3>
          </div>
          <div className="col-md-6 right">
            <img className="w-100 " src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGypJJpy6KoVEVGpBXMzTOoz28bilLONjl042Ae-v36YmxQ7ys" alt="" />
          </div>
        </div>
        {blogs.map((blog) => {
          const { id, title, body, userId } = blog;
          return (
            <Link to={`/BlogDetail/${id}`} key={id} className="text-decoration-none text-dark">
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
          );
        })}
      </>
    </div>
  );
};

export default Banner;
