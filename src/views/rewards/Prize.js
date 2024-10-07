import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import Bulb from '@material-ui/icons/Brightness7';
//import Rejected from '@material-ui/icons/lightbulb-outline';
import Warning from '@material-ui/icons/Warning';
// import IconReward from '@material-ui/icons/info';

import { translate } from 'react-admin';
import * as Icons from './icons'

import {
  success,
  disabledBg,
  disabledHeader,
} from '../../styles/colors';

//import Photogrid from './Photogrid';

const styles = {
  avatar : {
    width : 60,
    height : 60,
    marginTop : 20,
    color : '#555555'
  }
}

const Icons = {
  brochure: Icons.Brochure,
  brochure_ad: Icons.BrochureAd,
  presentation : Icons.Presentation,
  video_interview : Icons.Interview,
  brand_highlight : Icons.Highlight,
  leaflets : Icons.Leaflets,
  meetups : Icons.Meetups,
  scanner : Icons.Scanner,
  rollups : Icons.Rollups,
  blog : Icons.Blog,
  earlybird : Icons.Earlybird
}

const rewarded = (prize, position, sessions) => {
  const level = 'level' in prize ? prize.level : 0;

  if (!sessions) {
    return null;
  }

  if (prize.min <= position && position <= prize.max && level < sessions) {
    return true;
  }

  return false;
};

const avatar = (prize, position, sessions) => {
  const status = rewarded(prize, position, sessions);

  if (status === null) {
    return <Warning color="#F44336" />;
  }

  if (status) {
    return <Bulb color={success} />;
  }

  return <Bulb color={disabledHeader} />;
};

const conditions = ({ min, max, level}, translate) => {
  const levelInfo = level ? `, minimum ${level}` + translate('prizes.points') : '';

  if (min === max) {
    if (min === 1) {
      return translate("prizes.must_be_winner") + `${levelInfo}`;
    }
    return translate("prizes.position_2") + `${min}${levelInfo}`;
  }
  return translate("prizes.position_1") + `${min}` + translate("prizes.and") + `${max}${levelInfo}`;
}


const Prize = ({ translate, prize, position, sessions }) => {

  const Icon = prize.name in Icons ? Icons[prize.name] : Bulb

  return (<Card style={{boxShadow: 'none'}}>
        <CardHeader

          avatar={<Icon style={styles.avatar} /> }
          style={{padding: 12}}
          title={
              <div>
                <Typography>{translate(`prizes.${prize.name}.title`)}</Typography>
                <Typography>{translate(`prizes.${prize.name}.description`)}</Typography>
              </div>
          }
          subheader={  
            <div>
               <Typography>{conditions(prize, translate)}</Typography>
              <Typography>{avatar(prize, position, sessions)}</Typography>
            </div>
           
       }

        />
      </Card>

)};

//
//

export default translate(Prize);
