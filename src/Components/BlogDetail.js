// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './Data';
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = data.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const handleDelete = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this post?');

    if (shouldDelete) {

      const newData = data.filter((blog) => blog.id !== parseInt(id));
      navigate('/'); 
    }
  };

  const { title, body, userId } = blog;

  return (
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
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
