import React from 'react';

import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/navigation/chevron-left';
import ChevronRight from '@material-ui/icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from '@material-ui/core/Toolbar';

const CustomPagination = ({ page, perPage, total, setPage }) => {
  const nbPages = Math.ceil(total / perPage) || 1;
  return (
    nbPages > 1 && (
      <Toolbar>
        <ToolbarGroup>
          {page > 1 && (
            <Button
              primary
              key="prev"
              label="Prev"
              icon={<ChevronLeft />}
              onClick={() => setPage(page - 1)}
            />
          )}
          {page !== nbPages && (
            <Button
              primary
              key="next"
              label="Next"
              icon={<ChevronRight />}
              onClick={() => setPage(page + 1)}
              labelPosition="before"
            />
          )}
        </ToolbarGroup>
      </Toolbar>
    )
  );
};

export default CustomPagination;
