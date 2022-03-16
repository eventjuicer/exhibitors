import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavigationRefresh from '@material-ui/icons/navigation/refresh';
import { ListButton, EditButton, DeleteButton } from 'react-admin';

const styles = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const InviteListActions = ({ basePath, data, refresh }) => (
  <CardActions style={styles}>
    <Button basePath="/contacts" primary label="Contacts" />

    <Button
      primary
      label="Refresh"
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/*

        <EditButton basePath={basePath} record={data} />
  <DeleteButton basePath={basePath} record={data} />
      <EditButton basePath={basePath} record={data} />
  <Button primary label="Custom Action" onClick={customAction} />
      */}
  </CardActions>
);

export default InviteListActions;
