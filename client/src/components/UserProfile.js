import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css'; // Import your CSS file

function UserProfile() {
  const { id } = useParams(); // Assuming you're using React Router for routing

  // Fetch user data based on the 'id' parameter
  // Sample user data
  const user = {
    id: id,
    username: 'example_user',
    // Add more user information
  };

  // Sample user's posts and reviews
  const userPosts = [
    { id: 1, title: 'My First Post' },
    { id: 2, title: 'Another Post' },
    // Add more user posts
  ];

  const userReviews = [
    { id: 101, text: 'Great movie!' },
    { id: 102, text: 'I loved it!' },
    // Add more user reviews
  ];

  return (
    <div>
      <h2>User Profile: {user.username}</h2>

      <h3>Posts by {user.username}</h3>
      <ul>
        {userPosts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          userPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>

      <h3>Reviews by {user.username}</h3>
      <ul>
        {userReviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          userReviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UserProfile;
