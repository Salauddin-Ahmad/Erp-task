import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {

  useEffect(() => {
    const fetchData = async () => {

        // states here
        // useState

      try {
       
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => { localStorage.removeItem("token"); window.location.href = '/'; }}>Logout</button>
      <h2>ERPNext Data</h2>
 
    </div>
  );
};

export default Dashboard;
