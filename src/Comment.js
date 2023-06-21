import React, { useState } from 'react';

function Comment() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Create a new comment object
    const newComment = {
      id: Date.now(), // Generate a unique ID
      content: comment,
      // Other properties like author, date, etc. can be added here
    };

    // Add the new comment to the list of comments
    setComments((prevComments) => [...prevComments, newComment]);

    // Clear the comment input field
    setComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comment;
