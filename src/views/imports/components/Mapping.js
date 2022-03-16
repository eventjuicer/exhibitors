import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from 'react-admin';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { changeImportMapping } from '../redux/actions';

import get from 'lodash/get';

const mappingOptions = ['skip', 'email', 'fname', 'lname', 'cname2', 'phone'];

const Mapping = ({cell, index}) =>  {

  const translate = useTranslate()
  const dispatch = useDispatch()
  const mappings = useSelector(state => state.import.mappings)
  //
  // shouldComponentUpdate(nextProps, nextState)
  // {
  //   const {index, mappings} = this.props;
  //
  //   console.log("index", index);
  //   console.log("mappings", mappings);
  //   console.log("nextProps", nextProps);
  //
  //   return true;
  // }


  useEffect(() => {

    setAutoMapping()

  })

  const setAutoMapping =() => {

    if (cell.indexOf('@') > 0) {
      return handleMappingChange('email');
    }

    if (cell.length < 15 && (cell.match(/[0-9]/g) || []).length > 8) {
      return handleMappingChange('phone');
    }
  }

  const handleMappingChange = value => {
    //check if already used?
    const { index, changeImportMapping } = this.props;

    //search for a value in object

    dispatch(changeImportMapping(index, value))
  };

  return (
    <Select
      floatingLabelText={translate('resources.imports.fields.assignment_body')}
      value={get(mappings, index, 'skip')}
      onChange={(ev, idx, value) => handleMappingChange(value)}
    >
      {mappingOptions.map((item, i) => (
        <MenuItem
          key={i}
          value={item}
          primaryText={translate(`fields.${item}`)}
        />
      ))}
    </Select>
  );
}

// const mapStateToProps = state => ({
//   mappings: state.import.mappings
// });

//   translate,
//   connect(mapStateToProps, { changeImportMapping: changeImportMappingAction })
// );

export default Mapping
