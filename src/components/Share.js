import React from 'react';
import Button from '@material-ui/core/Button';
import { translate } from 'react-admin';

//escape() will not encode: @*/+
//encodeURI() will not encode: ~!@#$&*()=:/,;?+'
//encodeURIComponent() will not encode: ~!*()'
import {
    LinkedIn,
    Facebook,
    Twitter
} from '@material-ui/icons'


const Icons = {
  linkedin : LinkedIn,
  facebook : Facebook,
  twitter : Twitter
}

const _escape = (str) => encodeURIComponent(str)

const Share = ({ translate, type, target, title, description, disabled }) => {

  const Icon = Icons[type]
  let link = '';

  const _target = _escape(target)

  switch (type) {
    case 'linkedin':
      link = `https://www.linkedin.com/sharing/share-offsite/?url=${ _target }`;

      break;

    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${ _target }`;
      break;

    case 'twitter':
      link = `https://twitter.com/intent/tweet?text=${ _target }`;

      break;

    default:
  }

  return (
    <Button
      label={translate(`actions.share_${type}`)}
      icon={<Icon />}
      href={link}
      target="_blank"
      disabled={disabled}
    />
  );
};

Share.defaultProps = {
  title : "",
  description : "",
  disabled : false
}

export default translate(Share);
