import React, {useEffect, useState} from 'react';
import { useTranslate, usePermissions } from 'react-admin';
import { Link } from 'react-router-dom';

import  Card  from '@material-ui/core/Card';
import Prize from './Prize';
import { getUserData } from '../../helpers';
import  httpClient  from '../../api/httpClient';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

const Stats = () => {

  const translate = useTranslate()
  const [stats, setStats] = useState({})

  // state = {
  //   stats: {},
  //   prizes: [],
  //   position: 0
  // };

  // componentDidMount() {
  //   this.getRanking();
  // }

  useEffect(() => {
    getRanking()
  }, [])

  const getRanking = async () => httpClient(`${process.env.REACT_APP_API_ENDPOINT}/prizes`).then(
      response => {
        setStats({
          stats: 'stats' in response.json.data ? response.json.data.stats : {},
          prizes: 'meta' in response.json ? response.json.meta.prizes : [],
          position:
            'position' in response.json.data ? response.json.data.position : 0
        });
      }
  );
  

  // render() {
  //   const { translate } = this.props;
  //   const { stats, prizes, position } = this.state;
  //   const { sessions } = stats;
  //  // const {loaded, permissions} = usePermissions();

    
  // }


  return (
   
    <div className="list-page">
      <Card style={{ marginTop: -25 }}>
        <Typography label="resources.rewards.name" />
    

       
          {translate('resources.rewards.body_text_1')}
          <Link to={{ pathname: '/ranking' }}>
            {translate('resources.ranking.name')}
          </Link>
          {translate('resources.rewards.body_text_2')}
          <Link to={{ pathname: '/creatives' }}>
            {translate('resources.creatives.name')}
          </Link>
          {translate('resources.rewards.body_text_3')}
     
      
          {translate("prizes.place")}
          {stats.sessions ? `#${stats.position}` : translate('prizes.unknown')}
       

        <Wrapper>
        {stats.prizes &&
          stats.prizes.map(item => (
            <Prize
              key={item.name}
              prize={item}
              position={stats.position}
              sessions={stats.sessions}
            />
          ))}</Wrapper>

        



      </Card>
    </div>

);
}

// const mapStateToProps = state => ({
//   ranking: state.admin.resources.ranking
// });
//
//


export default Stats
