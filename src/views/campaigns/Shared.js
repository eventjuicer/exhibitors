import React from 'react';
import FullNameField from '../../fields/FullNameField';
import { NumberField } from 'react-admin';

export const Title = ({ record }) =>
  record ? <FullNameField record={record} size={32} /> : null;

const colored = WrappedComponent => props =>
  props.record[props.source] > 500 ? (
    <span style={{ color: 'red' }}>
      <WrappedComponent {...props} />
    </span>
  ) : (
    <WrappedComponent {...props} />
  );

export const ColoredNumberField = colored(NumberField);

ColoredNumberField.defaultProps = NumberField.defaultProps;
