import React from 'react';
import { DeleteButton, useTranslate } from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import IconDelete from '@material-ui/icons/Delete';
import { status } from './status';
import { useSetModal } from '../../../contexts';
import { Box } from '../../../components';

const StatusAwareDeleteButton = props => {

  const modal = useSetModal()

  const intStatus = status(props.record);

  return intStatus === -3 ? (
    <DeleteButton {...props} />
  ) : (
    <IconButton onClick={() => modal('Sorry!', <Box>You can only delete before sending....</Box>)} >
      <IconDelete color="#cccccc" />
    </IconButton>
  );
}

export default StatusAwareDeleteButton
