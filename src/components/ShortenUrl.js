

import React, { useState } from 'react';

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenUrl = async () => {
    try {
      // Send a request to your backend to shorten the URL
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortUrl(data.shortUrl);
      } else {
        // Handle error
        console.error('Error shortening URL');
      }
    } catch (error) {
      // Handle error
      console.error('Error shortening URL', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={handleShortenUrl}>Shorten URL</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
};

export default ShortenUrl;
