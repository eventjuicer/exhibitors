import React from 'react';
import { Route } from 'react-router-dom';
import {Assignment, TrendingUp, VolumeUp} from '@material-ui/icons';



import Configuration from '../views/configuration';
import Ranking from '../views/ranking';
import Rewards from '../views/rewards';
import Logistics from '../views/logistics'
import Promote from '../views/promote'




export default [
  <Route exact path="/configuration"><Configuration /></Route>,
  <Route exact path="/ranking" icon={TrendingUp} component={Ranking} />,
  <Route exact path="/promote" icon={VolumeUp} component={Promote} />,
  <Route dupa="osiut" exact path="/logistics" icon={Assignment} component={Logistics} />,



  <Route exact path="/rewards" component={Rewards} />,
  // <Route exact path="/badgescanner" component={ScannerAuth} />,
  <Route exact path="/invite-vip" component={Logistics} />
];
