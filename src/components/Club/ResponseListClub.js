import React from 'react';
import './ResponseList.css';

const ResponseList = ({ responses }) => {
  return (
    <div className="response-list">
      <h3>Club Members</h3>
      {responses.map((response) => (
        <div key={response.id} className="response-item">
          <p>{response.firstName} {response.lastName}</p>
          <p>{response.email}</p>
          <p>{response.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
