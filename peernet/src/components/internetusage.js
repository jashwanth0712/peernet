import React, { useState, useEffect } from 'react';

export function InternetUsage() {
  const [speed, setSpeed] = useState(0);
  const [usage, setUsage] = useState(0);

  useEffect(() => {
    // simulate fetching internet speed and usage data
    const fetchInternetData = () => {
      const randomSpeed = Math.floor(Math.random() * 100);
      const randomUsage = Math.floor(Math.random() * 100);
      setSpeed(randomSpeed);
      setUsage(randomUsage);
    };
    fetchInternetData();
    const interval = setInterval(fetchInternetData, 5000); // fetch new data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <label>Internet Speed:</label>
      <input type="text" value={`${speed} Mbps`} readOnly />
      <label>Internet Usage:</label>
      <input type="text" value={`${usage} GB`} readOnly />
    </div>
  );
}

export default InternetUsage;
