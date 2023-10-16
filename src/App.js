import React, { useState } from 'react';
import './App.css';

function App() {
  // 创建一个状态以跟踪用户输入的长URL和显示的短URL
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  // 处理输入框变化
  const handleLongUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  // 处理缩短按钮点击
  const handleShortenUrl = () => {
    // 在这里执行向后端发送请求以缩短URL的逻辑
    // 您可以使用fetch或Axios等库发送POST请求到后端
    // 处理后端返回的短URL并设置到shortUrl状态中
    const requestBody = { longUrl };
    // 发送请求的代码示例
    fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => setShortUrl(data.shortUrl))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Petit URL</h1>
        <label htmlFor="longUrl">Enter your URL:</label>
        <input
          type="text"
          id="longUrl"
          name="longUrl"
          value={longUrl}
          onChange={handleLongUrlChange}
        />
        <button onClick={handleShortenUrl}>Shorten URL</button>
        {shortUrl && (
          <p>
            Your short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
