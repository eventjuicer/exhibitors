import React from 'react';

import { translate } from 'react-admin';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


import IconDownload from '@material-ui/icons/GetApp';
import IconZip from '@material-ui/icons/Archive';
import Button from '@material-ui/core/Button';
import httpClient  from '../../../api/httpClient';
import Iframe from '../../../components/Iframe';
import { getUserId } from '../../../helpers';

import CopyToClipboardButton from '../../../components/CopyToClipboardButton';

const newsletterLink = (link, type) => {
  const base = `${link}?participant_id=${getUserId()}`;

  switch (type) {
    case 'zip':
      return `${base}&zip=1`;

    case 'download':
      return `${base}&dl=1`;

    default:
      return base;
  }
};

class Newsletter extends React.Component {
  state = {
    newsletter: ''
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const { creative } = this.props;
    const res = await httpClient(newsletterLink(creative.content));
    await this.setStateAsync({ newsletter: res.body });
  }

  render() {
    const { translate, creative } = this.props;
    const { newsletter} = this.state;

    return (


      <Card
        style={{boxShadow : 'none'}}
        //containerStyle={{ backgroundColor: "#ffffff" }}
        >

          <CardHeader

            style={{padding: 0}}
            title={

              <div>
                <Typography>{translate(`resources.creatives.newsletters.${creative.name}.title`)}</Typography>
                <Typography>{translate(`resources.creatives.newsletters.${creative.name}.description`)}</Typography>
              </div>

          
            }
          //  subtitle={  <CardHeader
              //style={{ backgroundColor: colorHeader }}
              //  title={  }
                // avatar={! isEnabled(creative) ? <Warning color="#F44336" /> : null }
                style={{paddingTop:0}}
            //  />
            //}

          />

          {newsletter && (
            <div>
              <Iframe src={`data:text/html;base64,${newsletter}`} />

              <CardActions>
                <Button
                  primary={true}
                  download={true}
                  target="_blank"
                  label={translate("resources.creatives.actions.download_html")}
                  icon={<IconDownload />}
                  href={newsletterLink(creative.content, 'download')}
                />

                <Button
                  primary={true}
                  download={true}
                  target="_blank"
                  label={translate("resources.creatives.actions.download_zip")}
                  icon={<IconZip />}
                  href={newsletterLink(creative.content, 'zip')}
                />

                <CopyToClipboardButton
                  text={ atob(newsletter) }
                  label={translate("resources.creatives.actions.copy_html_to_clipboard")}
                />
              </CardActions>
            </div>
          )}

    </Card>

    );
  }
}

export default translate(Newsletter);
