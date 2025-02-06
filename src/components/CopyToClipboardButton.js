import React from 'react';
import {useNotify} from 'react-admin';
import FileCopy from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button'

const CopyToClipboardButton = ({
  label="common.copy-to-clipboard",
  text="props.text",
  addIcon=true,
  ...rest
}) => {

  const notify = useNotify()
 
  return (
    <CopyToClipboard
      text={text}
      onCopy={() =>  notify("actions.copied") }
    >
      
     <Button label={label} startIcon={addIcon? <FileCopy fontSize="small" /> : null} {...rest} />
    </CopyToClipboard>
  );
}


CopyToClipboardButton.defaultProps = {
  disabled : false
}

export default CopyToClipboardButton