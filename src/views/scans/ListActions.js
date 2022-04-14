import React from 'react';
import {Button} from '../../components'
import IconDownload from '@material-ui/icons/GetApp';
import {TopToolbar, useTranslate} from 'react-admin';
import { useToken } from '../../contexts';

const ListActions = (props) => {

  const token = useToken()
  const translate = useTranslate()

  return (
    <TopToolbar>
      <Button primary href={`https://api.eventjuicer.com/v1/restricted/scans?download=1&x-token=${ token }`} label="aor.action.export" startIcon={<IconDownload />} />
    </TopToolbar>
  );
}

export default ListActions
