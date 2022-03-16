import React, {useState, useCallback, useEffect, useMemo} from 'react'
import { isEmpty } from '../../helpers';
import {Alert, Box, Button} from '../'



const ContentProtector = ({diff, handleAcceptChanges, handleRejectChanges}) => {
   
    if(!diff){
      return null
    }

    return (<Alert severity="warning" label="editor.content_changed">
      <Box p={2}>
        <Button label="common.accept" color="primary" variant="outlined" onClick={handleAcceptChanges} />
        <Button label="common.reject" color="default" variant="outlined" onClick={handleRejectChanges} />
      </Box>
    </Alert>)

}


export const useContentProtector = (content) => {

  const [finalContent, setFinalContent] = useState(content);
  const [diff, setDiff] = useState(0);

  useEffect(()=>{

    if(content != finalContent){

      //wasn't yet populated....dont wait for accept
      if(isEmpty(finalContent)){
        setFinalContent(content)
        return;
      }

      setDiff(Math.abs(content.length - finalContent.length))
    }
  }, [content])

  const accept = useCallback(
    () => {setFinalContent(content); setDiff(0)}
  )

  const reject = useCallback(
    () => setDiff(0)
  )

  return useMemo(()=>({
    content: finalContent, 
    diff, 
    accept, 
    reject
  }), [finalContent, diff])

}


export default ContentProtector