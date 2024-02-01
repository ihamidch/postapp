import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const blogData = await response.json();
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlogById();
  }, [id]);

  return (
    <div>
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>ID: {blog.id}</p>
          <p>User ID: {blog.userId}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
