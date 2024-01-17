// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './Data';

const BlogDetail = () => {
  const { id } = useParams(); // Retrieve the id parameter from the URL

  // Assuming 'data' is an array containing your blog posts
  const post = data[parseInt(id, 10) - 1] || {}; // Get the post based on the id

  return (
    <div>
     <div className="container">
         <div className="row">
            <div className="col-md-12">
              <div className="card my-3">
                 <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <p className="card-text">{post.id}</p>
                <p className="card-text">{post.userId}</p>
                {/* <p className="card-text">{post.name}</p> */}
                 </div>
              </div>
            </div>
         </div>
         </div>
    </div>
  );
};

export default BlogDetail;
