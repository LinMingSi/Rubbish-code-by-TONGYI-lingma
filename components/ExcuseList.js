import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExcuseList = () => {
  const [excuses, setExcuses] = useState([]);

  useEffect(() => {
    axios.get('/api/excuses')
      .then(response => {
        setExcuses(response.data);
      })
      .catch(error => {
        console.error('Error fetching excuses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Excuse List</h1>
      <ul>
        {excuses.map(excuse => (
          <li key={excuse._id}>{excuse.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExcuseList;