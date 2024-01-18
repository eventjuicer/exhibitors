
import { get } from '../../../helpers';
import { Chip } from '../../../components';
import { LinkedIn } from '@material-ui/icons';
import { makeStyles } from '../../../helpers';


const useStyles = makeStyles({

    title: {
        display: 'block',
    },

    chip: {
    //    display: 'block',
    //    fontSize: "90%"
    }

})

const getFullChipLabel = (field, option) => {

    if(!field || !option) return ""

    return  `resources.visitors.fields.${field}.options.${option}`

}




export const PersonField = ({record}) => {

    if(!record) return null
    
    return <span>{`${get(record, "profile.fname")} ${get(record, "profile.lname")}`}</span>
  
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
  
    return (<div><span className={classes.title}>{get(record, "profile.cname2", "").substr(0, 35)}</span>
   {pt? <Chip size="small" variant="outlined" className={classes.chip} label={getFullChipLabel("participant_type", pt)} />: null}</div>)
  
  }

  
