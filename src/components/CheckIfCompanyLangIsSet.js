
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
            modal("resources.companydata.customfields.lang.name", <Box p={3}>
                <ChangeCompanyLang />
            </Box>)
        }
     

    },[check])

    return null
}

export default  CheckIfCompanyLangIsSet