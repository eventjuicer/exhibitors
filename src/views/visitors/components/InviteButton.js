import React from 'react';
import Icon from '@material-ui/icons/InsertInvitation';
import { ButtonLink } from '../../../components';


const InviteButton = ({
  basePath = '',
  limits,
  locale,
  record = {},
  resource,

}) => {

  /**
   * 
   * check limits!
   *  if out of limit - DISABLE BUTTON
   */

  // return get(limits, resource, true) ? (
  //   <Button
  //     primary
  //     label={translate("resources.visitors.actions.invite")}
  //     icon={<Icon />}
  //     containerElement={
  //       <Link
  //         to={{
  //           pathname: `/meetups/create`,
  //           search: stringify({ participant_id: record.id })
  //           //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
  //         }}
  //       />
  //     }
  //   />
  // ) : (
  //   <Button
  //     disabled
  //     label={translate('resources.visitors.actions.invite')}
  //     icon={<Icon />}
  //     //  onClick={()=>alert("asd")}
  //   />
  // );

  return (<ButtonLink 
    to="/meetups/create" 
    query={{
      participant_id: record.id
    }} 
    label="resources.visitors.actions.invite" 
    startIcon={<Icon />} 
    variant="outlined"
  />)

}



export default InviteButton
