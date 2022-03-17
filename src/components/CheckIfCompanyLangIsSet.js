
import React from 'react'
import { useSetModal } from '../contexts'
import { useCompanyLang } from '../helpers'
import ChangeCompanyLang from './ChangeCompanyLang'
import { Box } from '.'

const CheckIfCompanyLangIsSet = () => {

    const modal = useSetModal()
    const check = useCompanyLang()

    React.useEffect(()=>{

        if(check && !check.value){
            modal("common.set_language", <Box p={3}>
                <ChangeCompanyLang />
            </Box>)
        }
     

    },[check])

    return null
}

export default  CheckIfCompanyLangIsSet