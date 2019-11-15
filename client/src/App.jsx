import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

const App = props => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('/api/properties')
      .then(result => setProperties(result.data))
      .catch(error => console.error(error.message));
  }, []);

  if (!properties.length) {
    return <div>No properties</div>;
  }
  return (
    <div>
      {properties.map(property => (
        <h3 key={property._id}>
          {property.name} ({property.capacityMin} - {property.capacityMax})
        </h3>
      ))}
    </div>
  );
};

export default App;
