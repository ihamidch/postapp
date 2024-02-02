import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Edit = () => {
  const location = useLocation();
  const state = location.state.data2;
  console.log(state);

  // Initialize state with values from location state
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);
  const [userId, setUserId] = useState(state.userId);

  // Update state when input values change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`, {
      method: 'PUT', // or 'PATCH' depending on your API
      body: JSON.stringify({
        id: state.id,
        title,
        body,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            value={body}
            onChange={handleBodyChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Edit;
