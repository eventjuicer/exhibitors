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
import { Typography, Grid } from "../../../components";
import { grey, yellow, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
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
    gray: {
        backgroundColor: grey[100],
        color: "#000",
        padding: 5,
        marginBottom: 10
    },
    ltd: {
        backgroundColor: yellow[100],
    },
    p2c: {
        backgroundColor: green[100],
    }

}));


 

const P2CMeetupAcceptRejectButtons = ({record, resource, ...rest}) => {

    const {id} = record || {};
    const refresh = useRefresh();
    const notify = useNotify();
    const classes = useStyles();

    const [update, { loading, error }] = useUpdate();

    const handleChangeAgreed = (agreed) => update(resource, id, {agreed}, record, {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
            },
            onFailure: () => notify('Error: item not updated', 'warning'),
    })

    if(!record){
        return null
    }

    if(record.agreed){
        return <CheckCircleIcon className={classNames(classes.icon, classes.iconOn)} />
    }

    if(record.responded_at && !record.agreed){
        return <BlockIcon className={classNames(classes.icon, classes.iconOff)} />
    }

    if(record.direction == "P2C" || record.direction == "LTD"){
        return (<span className={classes.root}>
            <Grid container>
                <Grid item>
                <Typography className={classNames(classes.gray, {
                    [classes.ltd]: record.direction == "LTD",
                    [classes.p2c]: record.direction == "P2C"
                })} label={`resources.meetups.${record.direction}.buttons`.toLowerCase()} variant="overline" />
                </Grid>
                <Grid item>
                <Button variant="outlined" onClick={() => handleChangeAgreed(1) } label="common.accept" startIcon={ <CheckCircleIcon /> } />
                <Button variant="outlined" color="default" onClick={()=>  handleChangeAgreed(0)} label="common.reject" startIcon={ <BlockIcon  /> } />
                </Grid>
            </Grid>
            </span>)
    }

    return <TimerIcon />

   

}

P2CMeetupAcceptRejectButtons.defaultProps = {
    addLabel: true
}

export default P2CMeetupAcceptRejectButtons




