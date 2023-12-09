import React from 'react';

const Tile = ({ title, value }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Tile;