import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated API call or data fetching from a backend
    // Replace this with your actual data fetching logic
    const fetchPosts = async () => {
      // Fetch the list of posts from an API or local data source
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();

      // Update the state with the fetched posts
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3 className="post-title">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="post-excerpt">{post.excerpt}</p>
          <span className="post-date">{post.date}</span>
        </div>
      ))}
    </div>
  );
}

export default PostList;
