import React from 'react'
import { resizeCloudinaryImage, grey, makeStyles } from '../../../helpers'
import { useTranslate } from 'react-admin'
import {Avatar, Box, Paper, Grid, Typography} from '../../../components'

 const useStyles = makeStyles({

  avatarContainer: {
    width: 400,
    height: 200,
  },
  avatarImg: {
    objectFit: "contain",
    maxHeight: "85%",
    maxWidth: "85%",
  },
  stats: {
    maxWidth: 300,
    padding: 10,
    backgroundColor: grey[300],
    marginBottom: 20
  }
});


const CompanyRankInfo = ({logotype="", sessions = 0, position = 0}) => {
   
   const classes = useStyles()
   const translate = useTranslate()


    return (<Box mb={8}>

    <Grid spacing={8} container alignItems="center">
      <Grid item>
        <Avatar variant="square" src={ resizeCloudinaryImage(logotype, 300, 300) } classes={{
        root: classes.avatarContainer,
        img: classes.avatarImg
        }}/>
      </Grid>
      <Grid item>
        <Paper className={classes.stats}>
          <Grid container spacing={1}>
          <Grid item>
          <Typography gutterBottom align="center" variant="body1" label="common.points" />
          <Typography gutterBottom align="center" variant="h4"> {sessions} </Typography>
          </Grid>
          <Grid item>
          <Typography gutterBottom align="center" variant="body1" label="common.position" />
          <Typography gutterBottom align="center" variant="h4"> {sessions ? position: "-"} </Typography>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>



    {/* <Box mt={5}>
    <Grid container spacing={6}>
    <Grid item xs={12} sm={12} md={7} lg={7} xl={8}>
    <Typography gutterBottom variant="h4">{translate("exhibitor.promo.list")}</Typography>
    <PartnerCreatives data={company.creatives} />
    <Box mt={5}>{sidebar}</Box>   
    </Grid>
    <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
    <Typography gutterBottom variant="h4">{translate("exhibitor.prizes.list")}</Typography>
    <PartnerPrizes active={company.stats.prizes} icons={icons} full={true} points={company.stats.sessions} position={company.stats.position} />
 
    </Grid>
    </Grid>
    </Box> */}

    
     
   
    </Box>)

 }


export default CompanyRankInfo