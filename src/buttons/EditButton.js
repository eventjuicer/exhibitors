import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { cyan500 } from '@material-ui/core/styles/colors';
import ContentCreate from '@material-ui/icons/content/create';

const EditButton = ({ basePath = '', record = {} }) => (
  <IconButton
    containerElement={<Link to={`${basePath}/${record.id}`} />}
    style={{ overflow: 'inherit' }}
  >
    <ContentCreate color={cyan500} />
  </IconButton>
);

EditButton.propTypes = {
  basePath: PropTypes.string,
  record: PropTypes.object
};

EditButton.defaultProps = {
  style: { padding: 0 }
};

export default EditButton;
