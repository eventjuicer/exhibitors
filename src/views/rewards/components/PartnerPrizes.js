


import React from 'react'
import { useGet, useSetModal, makeStyles, capitalizeFirstLetter, isEmpty } from '../../../helpers'
import { useTranslate } from 'react-admin'
import { Grid, Table, Typography } from '../../../components'
import PartnerPrizeDetails from './PartnerPrizeDetails'
import Ok from '@material-ui/icons/SentimentVerySatisfied';
import NotOk from '@material-ui/icons/SentimentVeryDissatisfied';

 const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  avatarContainer: {
    width: 300,
    height: 300,
  },
  avatarImg: {
    objectFit: "contain",
    maxHeight: "85%",
    maxWidth: "85%",
  },
  active: {
    color: "black",
    cursor: "pointer"
  },
  disabled: {
    color: "#ccc",
    cursor: "pointer"
  },
  green: {
      color: "lightgreen"
  },
  red: {
      color: "red"
  }
});


const PartnerPrizes = ({data=[], active=[], icons={}, full=false, points=0, position=0}) => {
    
    // const {data, loading, error} = useGet("/prizes", true);

    const dialog = useSetModal()
    const classes = useStyles()
    const translate = useTranslate()

    if(isEmpty(data) || !Array.isArray(data)){
        return null
    }

    const hasPoints = (required, points) => points >= required ? <Ok className={classes.green} />: <NotOk className={classes.red}  />
    const hasPosition = (min, max, position) => position <= max && position >= min? <Ok className={classes.green} />: <NotOk className={classes.red}  />

    const renderAssignment = (prize) => (<div>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="flex-end">
        <Grid item>{translate("prizes.condition.points", {points: prize.level})}</Grid>
        <Grid item>{hasPoints(prize.level, points)}</Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="flex-end">
        <Grid item>{translate("prizes.condition.position", {
        min: prize.min, 
        max: prize.max
        })}</Grid>
        <Grid item>{hasPosition(prize.min, prize.max, position)}</Grid>
        </Grid>
    </div>)

    const renderIcon = (prize, large=false) => {
        
        const name = capitalizeFirstLetter( prize.name )

        if(name in icons){
            return React.createElement(icons[name], {
                key: name,
                fontSize: "large",
                style: large? {fontSize: 50}: undefined,
                onClick: () => dialog(`prizes.${prize.name}.title`, <PartnerPrizeDetails {...prize} />),
                className: (active || []).includes(prize.name)? classes.active: classes.disabled
            })
        }

        return name

    }

    return data.map(prize => renderIcon(prize))
}


export default PartnerPrizes



/**
 * 
 * 
 * (<TableContainer><Table><TableBody>{data.map(prize => (
            <>
            <TableRow>
                <TableCell colSpan={2}>
                    <Typography variant="subtitle1">{translate(`exhibitor.prizes.${prize.name}.name`)}</Typography>
                </TableCell>
            </TableRow>
            <TableRow key={prize.name}>
            <TableCell align="right">{renderIcon(prize, true)}</TableCell>
            <TableCell align="left">{renderAssignment(prize)}</TableCell>
            </TableRow>
            </>
          ))
        }</TableBody></Table></TableContainer>)

 */