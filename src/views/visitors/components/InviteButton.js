import React from 'react';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import get from 'lodash/get';
import { stringify } from 'query-string';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/InsertInvitation';

/*

basePath
limits
locale
record
resource
translate

*/
const InviteButton = ({
  basePath = '',
  limits,
  locale,
  record = {},
  resource,

}) => {

  const translate = useTranslate()

  return get(limits, resource, true) ? (
    <Button
      primary
      label={translate("resources.visitors.actions.invite")}
      icon={<Icon />}
      containerElement={
        <Link
          to={{
            pathname: `/meetups/create`,
            search: stringify({ participant_id: record.id })
            //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
          }}
        />
      }
    />
  ) : (
    <Button
      disabled
      label={translate('resources.visitors.actions.invite')}
      icon={<Icon />}
      //  onClick={()=>alert("asd")}
    />
  );


}



export default InviteButton
