import React, { useEffect, useState } from 'react';

const Faches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fix 1: Correct the spelling of 'fetch', not 'fatch'
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // Fix 2: Correct the spelling of 'json', not 'jason'
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

//   console.log(data);

  return (
    <div>
      <h1>Faches</h1>
      <table className="table" border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.body}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
  );
};

export default Faches;
