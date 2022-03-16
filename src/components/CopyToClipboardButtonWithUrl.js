import React from 'react';
import CopyToClipboardButton from './CopyToClipboardButton'
import LinkIcon from '@material-ui/icons/Link';

const CopyToClipboardButtonWithUrl = ({path=""}) => {

    const [domain, setDomain] = React.useState("")
  
    React.useEffect(()=>{
      setDomain( window.location.protocol + "//" + window.location.host )
    },[])
  
    if(!domain){
      return null
    }
  
    return (
      <CopyToClipboardButton text={`${domain}/#/logistics?${path}`} size="small" startIcon={<LinkIcon />}  variant="text" color="default"  />
    )
  }


export default CopyToClipboardButtonWithUrl