import React from 'react';
import { translate } from 'react-admin';

import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableRowColumn
} from '@material-ui/core';

import Mapping from './Mapping';

const Mappings = props => (
  <Table selectable={false}>
    <TableHead displaySelectAll={false}>
      <TableRow>
        <TableCell>{translate("resources.imports.fields.found")}</TableCell>
        <TableCell>{translate("resources.imports.fields.assignment")}</TableCell>
      </TableRow>
    </TableHead>

    <TableBody displayRowCheckbox={false}>
      {props.data.map((cell, i) => {
        return (
          cell.length && (
            <TableRow key={i}>
              <TableCell>{cell}</TableCell>
              <TableCell>
                <Mapping key={i} index={i} cell={cell} />
              </TableCell>
            </TableRow>
          )
        );
      })}
    </TableBody>
  </Table>
);

export default translate(Mappings);
