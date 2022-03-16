import React from 'react';
import { Route } from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';


import Configuration from '../views/configuration';
import Ranking from '../views/ranking';
import Rewards from '../views/rewards';
import Logistics from '../views/logistics'
import Promote from '../views/promote'

export default [
  <Route exact path="/configuration"><Configuration /></Route>,
  <Route exact path="/rewards" component={Rewards} />,
  <Route exact path="/ranking" component={Ranking} />,
  <Route exact path="/promote" component={Promote} />,

  // <Route exact path="/badgescanner" component={ScannerAuth} />,
  <Route dupa="osiut" exact path="/logistics" icon={AssignmentIcon} component={Logistics} />,
  <Route exact path="/invite-vip" component={Logistics} />
];
