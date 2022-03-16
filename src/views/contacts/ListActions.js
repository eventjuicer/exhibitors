import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavigationRefresh from '@material-ui/icons/Refresh';
import { CreateButton, translate } from 'react-admin';

const inviteListActionsStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const InviteListActions = ({ basePath, data, refresh, translate }) => (
  <CardActions style={inviteListActionsStyle}>
    <CreateButton basePath="/imports" label="resources.contacts.actions.import" />

    <Button
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/* Add your custom actions

      <EditButton basePath={basePath} record={data} />
      <ListButton basePath={basePath} />
      <DeleteButton basePath={basePath} record={data} />

      <Button primary label="Custom Action" onClick={customAction} />

        */}
  </CardActions>
);

export default translate(InviteListActions);
