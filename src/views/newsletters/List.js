import React from 'react';

import {Typography} from '../../components';
import Creatives from './Creatives';
import Card from '@material-ui/core/Card';
 

const ViewList = props => (

  <Card>

    <Typography label="resources.newsletters.name" />

    <Creatives />

  </Card>


);

export default (ViewList);
