// BlogDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {
  const { state, state: state1 } = useLocation(); // Use a single hook and extract both states

  if (!state || !state1) {
    return <div>No data available</div>; // Handle the case when data is not available
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-3">
              <div className="card-body">
                <h2 className="card-title">{state.title}</h2>
                <p className="card-text">{state.body}</p>
                <p className="card-text">{state.id}</p>
                <p className="card-text">{state.userId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-3">
              <div className="card-body">
                <h2 className="card-title">{state1.name}</h2>
                <p className="card-text">{state1.username}</p>
                <p className="card-text">{state1.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
