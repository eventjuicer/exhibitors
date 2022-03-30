import React from 'react'
import { Table, Typography, Grid, Avatar, ButtonLink, Search, Box } from '../../../components';
import { makeStyles, useGet, isEmpty } from '../../../helpers'
import { useTranslate, Loading } from 'react-admin'
import PartnerPrizes from '../../rewards/components/PartnerPrizes'
import * as icons from '../../rewards/icons'
import { useToken, useSettings } from '../../../contexts';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { PromoteIcon } from '../../promote';
import CircularProgress from '@material-ui/core/CircularProgress';

 const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },

  active: {
    color: "black",
    cursor: "pointer"
  },
  disabled: {
    color: "#ccc",
    cursor: "pointer"
  },
  grayed: {
    color: "#ccc"
  },


  AvatarWithCompanyName: {
    maxWidth: 300
  },

  PointsWithPrizes: {
    maxWidth: 400
  }

}));


const AvatarWithCompanyName = ({logotype=null, name=""}) => {

  const classes = useStyles()

  return (<Grid container spacing={1} alignItems="center" className={classes.AvatarWithCompanyName}>
      <Grid item xs={12} sm={12} md={6}>
        <Avatar src={logotype} size="100" mobileSize={60} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {name}
      </Grid>
    </Grid>)
}

const PointsWithPrizes = ({setting="", assigned=[], points=0 }) => {

  const {show_points} = useSettings(setting, {})
  const {data, loading, error} = useGet("/prizes", true);
  const classes = useStyles()

  if(loading){
    <CircularProgress/>
  }

  return (
    <Grid container spacing={1} justifyContent="center" className={classes.PointsWithPrizes}>
     <Grid item xs={12} sm={12} md={4}>
     {show_points?  <Typography variant="h5">{points}</Typography> : <HourglassEmptyIcon />}
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
      <PartnerPrizes data={data} active={show_points? assigned: []} icons={icons}  />  
      </Grid>  
    </Grid>
  )

}


const PartnerPerformance = ({icons, setting="", limit=undefined}) => {
   

  const {event_id} = useSettings(setting, {})

   const classes = useStyles()
   const {data, loading, error} = useGet("/ranking", true);
   const user = useToken()
   const translate = useTranslate()
   const [filtered, setFiltered] = React.useState([])

   React.useEffect(()=>{

    if(isEmpty(filtered)){
      setFiltered(data)
    }

   }, [filtered, data]);

    if(error){
      return <div>error</div>
    }

    if(loading){
      return <Loading />
    }

   return (
    <Box>
    <Search 
      data={data} 
      indexes={[
        "name",
        "slug"
      ]}
      onSearch={setFiltered}
      placeholder={translate("logistics.timeline.items.ranking.search")}
    />
    <Table showHeader={true} baseLabel="fields." rows={filtered} columns={[
      // {stats.position},
      {name: "cname2", render: (row) => <AvatarWithCompanyName logotype={row.logotype} name={row.name} />},
      {name: "prizes", render: (row) => <PointsWithPrizes setting={setting} assigned={row.stats.prizes} points={row.stats.sessions} /> },
      ...(user? []: [{name: "promote", render: (row) => <ButtonLink to={`/promote`} query={{company_id: row.company_id}} variant="outlined" label="resources.promote.menu" startIcon={<PromoteIcon />} /> }])

]} />
    </Box>
    )

 }


export default PartnerPerformance
