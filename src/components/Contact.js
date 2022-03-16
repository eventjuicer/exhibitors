import React from 'react';

import { translate } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';


import {resolveAssetPath} from '../helpers'

const styles = {
  avatar : {
    // width : 80,
    // height : 80,
    marginTop : 20,
  },
  link : {
    textDecoration : 'none',
    color : '#000000'
  }
}

const Contact = ({translate, avatar, phone, email}) => (


  <Card style={{boxShadow : 'none'}}>
         <CardHeader

           style={{padding: 12}}

           title={
             <div>
               <Typography>{translate("pos.support.title")}</Typography>
               <Typography>{translate("pos.support.description")}</Typography>
             </div>
            
           }

           subtitle={<CardHeader title={
              <span><a href={`mailto:${email}`} style={styles.link}>{email}</a> {phone}</span>
           } />}

           avatar={<Avatar size={80}  src={resolveAssetPath(avatar)} style={styles.avatar} />}
         />

 
       </Card>



);


Contact.defaultProps = {

  avatar : "bmeller.jpg",
  phone : "+48 721 945 134",
  email : "targiehandlu@targiehandlu.pl"

}

export default translate(Contact);
