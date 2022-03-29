

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from './Typography'
import { useUploadFiles } from '../helpers'
import { useUpdate } from 'react-admin'
import { useCloseModal } from '../contexts'



const useStyles = makeStyles(theme => ({
  root: {
    borderWidth: 1,
    borderColor: "#666",
    borderStyle: "dashed",
    backgroundColor: "#f7f7f7"
  },
}))


function Dropzone({resource="companydata", source="value", id, multiple=false}) {
  
  const classes = useStyles()
  //const update = useUploadFiles(resource)
  const [update, { data, loading, loaded, error }] = useUpdate();
  const closeModal = useCloseModal()

  const onDrop = (acceptedFiles) =>  acceptedFiles.map(file => update(resource, id, {
    [source]: file
  })) && closeModal() 


  // const onDrop = useCallback(acceptedFiles => upload(
  // acceptedFiles, 
  // id, 
  // (data)=>console.log("success", data), 
  // (error)=> console.log("error", error)), 
  // [id])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple})
    
    return (
      <Box {...getRootProps()} className={classes.root} p={10}>
        <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
        <input {...getInputProps()} />{
          isDragActive ?
            <Typography label="common.upload.drop" /> :
            <Typography label="common.upload.drop_or_click_to_upload" /> 
        }
        </Grid>
        </Grid>
      </Box>
    )
  }


export default Dropzone


/**
 * 

created_at: "2018-03-13 10:52:00"
id: 9
name: "logotype"
summary: [{path: "275246247_10222193074195968_7582476923553807338_n.jpeg"}]
updated_at: "2022-03-06 10:00:11"
value: "__uploaded_file__"
value_base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
 */