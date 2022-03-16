import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { cyan500 } from '@material-ui/core/styles/colors';
import ActionDelete from '@material-ui/icons/delete';

const DeleteButton = ({ basePath = '', record = {} }) => (
  <IconButton
    containerElement={<Link to={`${basePath}/${record.id}/delete`} />}
    style={{ overflow: 'inherit' }}
  >
    <ActionDelete color={cyan500} />
  </IconButton>
);

DeleteButton.propTypes = {
  basePath: PropTypes.string,
  record: PropTypes.object
};

DeleteButton.defaultProps = {
  style: { padding: 0 }
};

export default DeleteButton;
