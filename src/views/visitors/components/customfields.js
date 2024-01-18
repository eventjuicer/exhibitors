
import { get } from '../../../helpers';
import { Chip } from '../../../components';
import { LinkedIn } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '../../../helpers';

const useStyles = makeStyles({

  
    company: {
        display: 'block',
    },

    position: {
      display: 'block',
    },


    person: {

    },

  
    linkedin: {
    },


})

const getFullChipLabel = (field, option) => {

    if(!field || !option) return ""

    return  `resources.visitors.fields.${field}.options.${option}`

}


const LinkedInButton = (record) => {

  const classes = useStyles()

  let link = get(record, "profile.profile_linkedin", "").trim()

  if(!link){
    return null
  }

  if(!link.includes("linkedin.com")){
    link = `https://www.linkedin.com/in/${link}`
  }

  return (<IconButton href={link} color="default"><LinkedIn className={classes.linkedin} /></IconButton>)

}

export const PersonField = ({record}) => {

  const classes = useStyles()

    if(!record) return null
    
    return <span className={classes.person}>{`${get(record, "profile.fname")} ${get(record, "profile.lname")}`} <LinkedInButton /></span>
  
  }
  
  export const PositionField = ({record}) => {
      
    const classes = useStyles()

    if(!record) return null
  
    const cr = get(record, "profile.company_role", "")

    return (<div><span className={classes.title}>{get(record, "profile.position", "").substr(0, 35)}</span>
    {cr? <Chip size="small" variant="outlined" className={classes.chip} label={getFullChipLabel("company_role", cr)}/>: null}</div>)
  
  }


  export const CompanyField = ({record}) => {
    
    const classes = useStyles()

    if(!record) return null

    const pt = get(record, "profile.participant_type", "");
  
    return (<div><span className={classes.company}>{get(record, "profile.cname2", "").substr(0, 35)}</span>
   {pt? <Chip size="small" variant="outlined" className={classes.chip} label={getFullChipLabel("participant_type", pt)} />: null}</div>)
  
  }

  
