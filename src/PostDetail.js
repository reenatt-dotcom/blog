import React from 'react';
import Comment from './Comment';

function PostDetail({ title, content, author, date }) {
  return (
    <div className="post-detail">
      <h2 className="post-detail-title">{title}</h2>
      <p className="post-detail-content">{content}</p>
      <div className="post-detail-meta">
        <span className="post-detail-author">By {author}</span>
        <span className="post-detail-date">{date}</span>
      </div>
      <hr />
      <Comment />
    </div>
  );
}

export default PostDetail;
