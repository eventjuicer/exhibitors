import React, {useState, useEffect} from "react";
import {
    useUpdate,
    useRefresh,
    useNotify
} from 'react-admin';

// import get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles';
import BlockIcon from '@material-ui/icons/Block';
import classNames from "classnames";
import TimerIcon from '@material-ui/icons/Timer';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import { Button } from "../../../components";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        padding: 2


    },
    icon: {
        fontSize: 30
    },
    iconOn: {
        color: "green"
    },
    iconOff: {
        color: "red"
    },

}));

const P2CMeetupAcceptRejectButtons = ({record, resource, ...rest}) => {

    const {id} = record;
    const refresh = useRefresh();
    const notify = useNotify();
    const classes = useStyles();
    const [flag, setFlag] = useState(null);

    const [update, { loading, error }] = useUpdate();


    const handleChangeAgreed = (agreed) => update(resource, id, {agreed}, record, {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
                setFlag(null)
            },
            onFailure: () => notify('Error: item not updated', 'warning'),
    })


    if(!record){
        return null
    }

    if(record.agreed){
        return <CheckCircleIcon className={classes.iconOn} />
    }

    if(record.responded_at && !record.agreed){
        return <BlockIcon className={classes.iconOff} />
    }


    if(record.direction == "P2C"){

      

        return (<span className={classes.root}>

        <Button variant="outlined" onClick={() => handleChangeAgreed(1)} label="common.accept" startIcon={ <CheckCircleIcon /> } />
        <Button variant="outlined" color="default" onClick={()=>  handleChangeAgreed(0)} label="common.reject" startIcon={ <BlockIcon  /> } />

        
        </span>)
    }else{

        
       
        
          return <TimerIcon />

    }


}

P2CMeetupAcceptRejectButtons.defaultProps = {
    addLabel: true
}

export default P2CMeetupAcceptRejectButtons




