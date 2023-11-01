import React, { useState } from 'react';

function PostCreationForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission and create a new post
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your backend API
    console.log('Title:', title);
    console.log('Content:', content);
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostCreationForm;
