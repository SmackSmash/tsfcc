import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

const App = props => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const properties = await axios.get('/api/properties');
      setProperties(properties.data);
    };
    fetchProperties();
  }, []);

  if (!properties.length) {
    return <div>No properties</div>;
  }
  return (
    <div>
      {properties.map(property => (
        <h3 key={property._id}>{property.name}</h3>
      ))}
    </div>
  );
};

export default App;
