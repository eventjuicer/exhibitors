import React from 'react';
import { translate } from 'react-admin';


import Card from '@material-ui/core/Card';
 

import httpClient from '../../api/httpClient';
// import IconEmail from '@material-ui/icons/communication/email';
// import IconImages from '@material-ui/icons/collections';
import Image from './components/Image';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

function handleActive(tab) {
  //  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Creatives extends React.Component {
  state = {
    creatives: []
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const res = await httpClient(
      `${process.env.REACT_APP_API_ENDPOINT}/creatives`
    );
    const { meta } = await res.json;
    await this.setStateAsync({ creatives: meta.creatives });
  }

  filterByType(type) {
    const { creatives } = this.state;
    return Array.isArray(creatives)
      ? creatives.filter(item => item.act_as === type)
      : [];
  }

  renderImages() {
    return this.filterByType('image').map((item, i) => (
      <Image key={i} creative={item} />
    ));
  }



  render() {
    const { translate } = this.props;

    return (
      <Card>
        <Typography label="resources.creatives.heading" />
       

        <Wrapper>{this.renderImages()}</Wrapper>

    

      </Card>
    );
  }
}

export default translate(Creatives);
