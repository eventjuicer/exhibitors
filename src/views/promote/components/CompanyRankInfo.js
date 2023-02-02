import React from 'react'
import { resizeCloudinaryImage, makeStyles } from '../../../helpers'
import { useTranslate } from 'react-admin'
import {Avatar, Box, Grid, Typography, ButtonLink, GreyPaper} from '../../../components'
import {RankingIcon} from '../../ranking'
import HourglassEmpty from '@material-ui/icons/HourglassEmpty'
import { useSettings } from '../../../contexts'

 const useStyles = makeStyles({

  avatarContainer: {
    width: 400,
    height: 200,
  },
  avatarImg: {
    objectFit: "contain",
    maxHeight: "85%",
    maxWidth: "85%",
  }
});

const CompanyRankInfo = ({setting="promoninja", logotype="", sessions = 0, position = 0}) => {
   
   const classes = useStyles()
   const translate = useTranslate()
   const {show_points} = useSettings(setting, {})

    return (<Box mb={8}>

    <Grid spacing={8} container alignItems="center">
      <Grid item>
        <Avatar variant="square" src={ resizeCloudinaryImage(logotype, 300, 300) } classes={{
        root: classes.avatarContainer,
        img: classes.avatarImg
        }}/>
      </Grid>
      <Grid item>
        <GreyPaper>
          <Grid container spacing={1} justifyContent="center">
          <Grid item>
          <Typography gutterBottom align="center" variant="body1" label="common.points" />
          <Typography gutterBottom align="center" variant="h4"> {show_points && sessions ? sessions: <HourglassEmpty />} </Typography>
          </Grid>
          <Grid item>
          <Typography gutterBottom align="center" variant="body1" label="common.position" />
          <Typography gutterBottom align="center" variant="h4"> {show_points && sessions ? position: <HourglassEmpty /> } </Typography>
          </Grid>
          </Grid>

          <ButtonLink label="resources.promote.show_ranking" startIcon={<RankingIcon />} to="ranking" variant="text" />
        
        </GreyPaper>
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