import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslate } from 'react-admin';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import IconPreview from '@material-ui/icons/Visibility';
import IconDownload from '@material-ui/icons/GetApp';
import { showModal } from '../../../redux/actions';
import CopyToClipboardButton from '../../../components/CopyToClipboardButton';
import Monitor from '../../../services/Monitor';

const htmlCode = ({ name, act_as, link, image }) => {
  if (act_as === 'link') {
    return link;
  }

  return `<a href="${link}"><img src="${image}" alt="" /></a>`;
};


const Creative = ({ creative }) => {

  const translate = useTranslate()
  const dispatch = useDispatch()

  return (
    <Card>
      <CardHeader
        title={creative.name}
        //    subtitle="asd"
      />
  
      <CardActions>
        <CopyToClipboardButton
          text={htmlCode(creative)}
          label={translate("resources.creatives.actions.copy_embed_code")}
          raised={true}
        />
  
        {'image' in creative && (
          <Monitor name="image downloaded" services={['slack']}>
            <Button
              download={true}
              target="_blank"
              label={translate("resources.creatives.actions.download")}
              icon={<IconDownload />}
              href={`${creative.image}?dl=1`}
              onClick={() =>
                dispatch(showModal({
                  title: translate("resources.creatives.fields.image_downloaded"),
                  body: translate('resources.creatives.fields.image_body'),
                  buttons: [<CopyToClipboardButton
                            text={creative.link}
                            label={translate("resources.creatives.actions.copy_tracking_link_to_clipboard")}
                            raised={true}
                             />]
                }))
              }
            />
          </Monitor>
        )}
  
        <Button
          label={translate("resources.creatives.actions.preview")}
          icon={<IconPreview />}
          onClick={() =>
            dispatch(showModal({
              title: creative.name,
              body: '',
              image: creative.act_as === 'image' ? creative.image : null,
              buttons: [
                <CopyToClipboardButton
                  text={htmlCode(creative)}
                  label={translate("resources.creatives.actions.copy_embed_code")}
                  raised={true}
                />
              ]
            }))
          }
        />
      </CardActions>
    </Card>
  );
}
 

export default Creative
