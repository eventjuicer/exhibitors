import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteButton, useTranslate } from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import IconDelete from '@material-ui/icons/Delete';
import { showModal } from '../../../redux/actions';
import { status } from './status';

const StatusAwareDeleteButton = props => {
  const translate = useTranslate()
  const dispatch = useDispatch()

  const intStatus = status(props.record);

  return intStatus === -3 ? (
    <DeleteButton {...props} />
  ) : (
    <IconButton
      onClick={() =>
        dispatch(showModal({
          title: 'Sorry!',
          body: 'You can only delete before sending....'
        }))
      }
    >
      <IconDelete color="#cccccc" />
    </IconButton>
  );
}

export default StatusAwareDeleteButton
