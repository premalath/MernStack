import React, { useState } from 'react';

const MeaningFinder = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}>
        Find Meaning
      </button>
    </div>
  );
};

export default MeaningFinder;