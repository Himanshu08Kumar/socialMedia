import React, { useState } from 'react';
import './post.css';


const Post = ({ userId, firstname, lastname, location, description, likes = {}, comments = [], createdAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Object.keys(likes).length);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <h2>{firstname} {lastname}</h2>
        {location && <p className="post-location">{location}</p>}
      </div>
      <p className="post-description">{description}</p>
      <div className="post-meta">
        <div className="icon" onClick={toggleLike}>
          <i
            className={`fas fa-heart ${isLiked ? 'liked' : ''}`}
            style={{ color: isLiked ? 'red' : 'inherit' }}
          ></i>
          <span>{likeCount}</span>
        </div>
        <div className="icon" onClick={toggleComments}>
          <i className="fas fa-comment"></i>
          <span>{comments.length}</span>
        </div>
      </div>
      <div className="post-timestamp">
        <small>Posted on: {new Date(createdAt).toLocaleString()}</small>
      </div>
      <div className={`comment-section ${showComments ? 'active' : ''}`}>
        {comments.map((comment, index) => (
          <p key={index} className="post-comment">{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
