import React from 'react';
import { Button } from '../../../components'
import { useSetModal } from '../../../contexts';
import VipcodeUseModal from './VipcodeUseModal'


const EditButton = ({ record = {}, basePath, resource}) => {

    const modal = useSetModal()

    const {code, participant, blocked_till} = record

    const handleClick = () => {
        modal(`resources.${resource}.actions.options`, <VipcodeUseModal record={record} />)
    }

    if(participant || blocked_till){
        return <Button disabled label={`common.used`} />
    }

    return (<Button variant="outlined" label={`resources.${resource}.actions.use`} onClick={handleClick} />)

}


export default EditButton;
