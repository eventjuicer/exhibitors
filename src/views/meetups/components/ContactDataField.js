

import _get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

  company: {
    display: "block"
  },

  name: {
    display: "block",
    fontSize: "90%"
  },
 
  contact: {
    display: "block",
    fontSize: "90%"
  }
  
  }));

  


const ContactDataField = ({record }) => {

    const classes = useStyles()

    if(!record){
        return null
    }

    return (<span>
      
      <span className={classes.company}>{_get(record, "participant.profile.position")} @ <strong><a href={`https://${_get(record, "participant.domain")}`} target="_blank">{_get(record, "participant.profile.cname2")}</a></strong></span>
      <span className={classes.name}>{_get(record, `participant.profile.fname`)} {_get(record, `participant.profile.lname`)}</span>
      <span className={classes.contact}>{_get(record, `participant.profile.phone`)} {_get(record, `participant.email`)}</span>


      </span>)
  
  }
  
  ContactDataField.defaultProps = {
    label: 'resources.meetups.fields.participant.name'
  }


export default ContactDataField