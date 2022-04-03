import React from 'react';
import { Button } from '../../../components'
import { useSetModal } from '../../../contexts';
import VipcodeUseModal from './VipcodeUseModal'


const EditButton = ({ record = {}, basePath, resource}) => {

    const modal = useSetModal()

    const {code, participant, blocked_till} = record

    const handleClick = () => {
        modal(`resources.${resource}.use`, <VipcodeUseModal record={record} />)
    }

    if(participant){
        return <Button disabled label={`resources.${resource}.used`} />
    }

    if(blocked_till){
        return <Button disabled label={`resources.${resource}.blocked`} />
    }

    return (<Button variant="outlined" label={`resources.${resource}.use`} onClick={handleClick} />)

}


export default EditButton;
