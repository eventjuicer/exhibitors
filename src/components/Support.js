
import Typography  from "./Typography"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { useGet, isEmpty } from '../helpers';
import { useSettings, useToken } from "../contexts"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   
   
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }));

const Support = () => {
    const people = useSettings("support")
    const classes = useStyles();
    const token = useToken();
    const {data, checking, error} = useGet(token? "/support": null);

    console.log(data)

    if(!people || !Array.isArray(people) || isEmpty(people)){
      return null
    }

    return <Box mt={2} ml={3}>

        <Typography variant="h5" label="support.title" gutterBottom />
       
        {people.map(person => (
          <Box key={person.initials} mt={2}>
          <Grid container direction="row" spacing={3}>
          <Grid item>
          <Avatar src={person.avatar} className={classes.large} />
          </Grid>
          <Grid item>
          <Typography variant="body1" paragraph>{person.fname}{` `}{person.lname}{` - `}{person.position}</Typography>
          <Typography variant="body1" paragraph>{person.phone}{` `}{person.email}</Typography>

          </Grid>
        </Grid>
        </Box>
        ))}
    </Box>
}

export default Support