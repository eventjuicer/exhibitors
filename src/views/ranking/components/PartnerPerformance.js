import React from 'react'
import { Table, Typography, Grid, Avatar, ButtonLink, Search, Box } from '../../../components';
import { makeStyles, useGet, isEmpty } from '../../../helpers'
import { useTranslate } from 'react-admin'
import PartnerPrizes from '../../rewards/components/PartnerPrizes'
import * as icons from '../../rewards/icons'
import { useToken } from '../../../contexts';

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
        <Avatar src={logotype} size="80" />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {name}
      </Grid>
    </Grid>)
}

const PointsWithPrizes = ({prizes=[], assigned=[], points=0 }) => {

  const classes = useStyles()

  return (
    <Grid container spacing={1} justifyContent="center" className={classes.PointsWithPrizes}>
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h5">{points}</Typography>
      </Grid>  
      <Grid item xs={12} sm={12} md={8}>
      <PartnerPrizes data={prizes} active={assigned} icons={icons}  />  
      </Grid>  
    </Grid>
  )

}


const PartnerPerformance = ({icons, event_id=null, show_points=true, limit=undefined}) => {
   
   const classes = useStyles()
   const {data, loading, error} = useGet("/ranking", true);
   const prizes = useGet("/prizes", true);
   const user = useToken()
   const translate = useTranslate()
   const [filtered, setFiltered] = React.useState([])

   React.useEffect(()=>{

    if(isEmpty(filtered)){
      setFiltered(data)
    }

   }, [filtered, data]);

    if(loading || error){
        return null
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
    />
    <Table showHeader={true} baseLabel="fields." rows={filtered} columns={[
      // {stats.position},
      {name: "cname2", render: (row) => <AvatarWithCompanyName logotype={row.logotype} name={row.name} />},
      {name: "prizes", render: (row) => <PointsWithPrizes prizes={prizes.data} assigned={row.stats.prizes} points={row.stats.sessions} /> },
      ...(user? []: [{name: "link", render: (row) => <ButtonLink to={`/promote`} query={{company_id: row.company_id}} variant="outlined" /> }])

]} />
    </Box>
    )

 }


export default PartnerPerformance