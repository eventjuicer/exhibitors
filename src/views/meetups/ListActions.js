import React from 'react';
import CardActions  from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavigationRefresh from '@material-ui/icons/Refresh';
import { translate } from 'react-admin';

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({
  resource,
  filters,
  displayedFilters,
  filterValues,
  basePath,
  showFilter,
  refresh,
  translate
}) => (
  <CardActions style={style}>
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button'
      })}

    <Button
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/*
            <Button primary label="Custom Action" onClick={()=> console.log()} />

          */}
  </CardActions>
);

export default translate(Actions);
