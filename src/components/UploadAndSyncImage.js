import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from './Button'
import EditIcon from '@material-ui/icons/Edit';
import Dropzone from './Dropzone';
import {usePusher, useSetModal } from '../contexts';
import Avatar from './Avatar'

/**
 * __uploaded_file__
 * RestrictedImageUploaded
 */

const UploadableAvatar = ({size=150, variant="square", preview,...rest}) => {

      const [interacted, setInteracted] = React.useState(false)
      const modal = useSetModal()
      const newImageSrc = usePusher("RestrictedImageUploaded", interacted)

      const imageSrc = newImageSrc || preview
      size = parseInt(size) || 150
      
      const handleClick = React.useCallback(() => {
            setInteracted(true)
            modal("common.upload.dialog", <Dropzone {...rest} />)
      })
      const handlePreview = React.useCallback(
            () => modal("common.preview", <Box><Avatar size="500" src={imageSrc} variant={variant} /></Box>)
      )

      return (

      <Grid container direction='column' alignItems='center'>
            <Grid item>

                  <Avatar size={size} src={imageSrc} onClick={handlePreview} variant={variant}  />

            </Grid>
            <Grid item>
                  <Button onClick={handleClick} label="common.edit" variant="text" startIcon={<EditIcon />} />
            </Grid>
      </Grid>)

}


export default UploadableAvatar