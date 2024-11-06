import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {/* Display your data here */}
    </div>
  );
};

export default Dashboard;
