import React from 'react';

function Post({ title, content, author, date }) {
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="post-meta">
        <span className="post-author">By {author}</span>
        <span className="post-date">{date}</span>
      </div>
    </div>
  );
}

export default Post;
