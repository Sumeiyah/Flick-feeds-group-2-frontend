import React, { useState } from 'react';

function ReviewComment() {
  const [text, setText] = useState('');

  // Handle submitting a review or comment
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the review/comment data to your backend API
    console.log('Text:', text);
  };

  return (
    <div>
      <h3>Write a Review or Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewComment;
