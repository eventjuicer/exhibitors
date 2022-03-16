import React from 'react';
import {useNotify} from 'react-admin';
import FileCopy from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button'

const CopyToClipboardButton = ({
  text="props.text",
  ...rest
}) => {

  const notify = useNotify()
 
  return (
    <CopyToClipboard
      text={text}
      onCopy={() =>  notify("actions.copied") }
    >
     <Button label="common.copy-to-clipboard" startIcon={ <FileCopy /> } {...rest} />
    </CopyToClipboard>
  );
}


CopyToClipboardButton.defaultProps = {
  disabled : false
}

export default CopyToClipboardButton