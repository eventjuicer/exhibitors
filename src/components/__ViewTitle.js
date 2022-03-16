import React from 'react';
import CardHeader  from '@material-ui/core/CardHeader';
import { useTranslate } from 'react-admin';
import get from 'lodash/get';

const Limit = props => {
  const translate = useTranslate()
  const resData = get(props.limits, props.resource, '...');

  const title = translate(`resources.${props.resource}.name`);

  const limit = props.limit
    ? translate(`resources.${props.resource}.limit`, { limit: resData })
    : '';

  return (
    <CardHeader
      style={{ padding: 0 }}
      title={title + limit}
      subheader={
        props.limit || props.subtitle
          ? translate(`resources.${props.resource}.subtitle`)
          : null
      }
    />
  );
}

export default Limit
