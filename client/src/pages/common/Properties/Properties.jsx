import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProperties } from '../../../actions';
import Common from '../../../containers/Common/Common';

const Properties = ({ properties, fetchProperties }) => {
  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  if (!properties.length) {
    return (
      <Common>
        <div>No properties</div>
      </Common>
    );
  }
  return (
    <Common>
      <div>
        {properties.map(property => (
          <h3 key={property._id}>
            {property.name} ({property.capacityMin} - {property.capacityMax})
          </h3>
        ))}
      </div>
    </Common>
  );
};

Properties.propTypes = {
  properties: PropTypes.array,
  fetchProperties: PropTypes.func
};

const mapStateToProps = ({ properties }) => ({ properties });

export default connect(mapStateToProps, { fetchProperties })(Properties);
