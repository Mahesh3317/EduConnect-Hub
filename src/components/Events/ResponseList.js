import React from 'react';

const ResponseList = ({ responses }) => {
  return (
    <div>
      <h3>Event Responses</h3>
      {responses.map((response) => (
        <div key={response.id}>
          <p>{response.firstName} {response.lastName}</p>
          <p>{response.email}</p>
          <p>{response.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
