import React from 'react'
import TextField from '@material-ui/core/TextField'
import {Box, Grid, DisplayAndCopyToClipboardText, Typography, Button} from '../../../components'
import { useCompany } from '../../../contexts';
import { vipCodeUrl } from '../../../helpers'
import { useUpdate, email as emailValidation, useTranslate, useRefresh } from 'react-admin';
import { useCloseModal } from '../../../contexts';


const VipcodeUseModal = ({record}) => {
  
    const [email, setEmail] = React.useState("")
    // const translate = useTranslate()
    const slug = useCompany("slug")
    const refresh = useRefresh()
    const [update, { data, loading, error }] = useUpdate();
    const close = useCloseModal()

    const {id, code} = record


    const inviteUrl = vipCodeUrl(slug, code)
    const hasError = emailValidation()(email)


    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = () => {
        update('vips', id, {email}, record, {
            onSuccess: () => {

                close()
                refresh()
               
            }
        })
    }

    return (<Box>

    <Box mb={5}>
    <Typography label="common.option1" variant="h5"  gutterBottom  />
    <Typography label="resources.vipcodes.actions.use-via-email" variant="body1" paragraph />

    <TextField autoFocus required error={Boolean(hasError)} onChange={handleChange} multiline={false} value={email} fullWidth={true} variant="outlined" label="E-mail" helperText={hasError && hasError.message } />
    <Button disabled={Boolean(!email || hasError || loading)} onClick={handleSubmit} label="common.send" />

    </Box>
   
    <Box mb={5}>
    <Typography label="common.option2" variant="h5" gutterBottom />
    <Typography label="resources.vipcodes.actions.use-manually" variant="body1" paragraph />

    <DisplayAndCopyToClipboardText link={inviteUrl} />
    </Box>


    </Box>)
}


export default VipcodeUseModal