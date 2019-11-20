import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';

const Properties = ({ properties, fetchProperties }) => {
  console.log(properties);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

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

const mapStateToProps = ({ properties }) => ({ properties });

export default connect(mapStateToProps, { fetchProperties })(Properties);
