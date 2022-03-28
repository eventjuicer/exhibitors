import React from 'react';
import { Route } from 'react-router-dom';

import Configuration from '../views/configuration';
import Rewards from '../views/rewards';

import {default as Ranking, RankingIcon} from '../views/ranking';
import {default as Logistics, LogisticsIcon} from '../views/logistics'
import {default as Promote, PromoteIcon} from '../views/promote'


export default [
  <Route exact path="/configuration"><Configuration /></Route>,
  <Route exact path="/ranking" icon={RankingIcon} component={Ranking} />,
  <Route exact path="/promote" icon={PromoteIcon} component={Promote} />,
  <Route dupa="osiut" exact path="/logistics" icon={LogisticsIcon} component={Logistics} />,


  <Route exact path="/rewards" component={Rewards} />,
  // <Route exact path="/badgescanner" component={ScannerAuth} />,
  <Route exact path="/invite-vip" component={Logistics} />
];
