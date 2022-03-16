

import React from 'react';
import {translate} from 'react-admin';
import _get from 'lodash/get';

import Chip from '@material-ui/core/Chip';


const isHTML = (str = "") => str && /<[a-z][\s\S]*>/i.test(str)

const stripTags = html => {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return (tmp.textContent || tmp.innerText || "").substr(0, 100);
}

const styles = {
 
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },

}




const MultiContentField = ({basePath, record, resource, source, translate, baseLabel }) => {

  const value = _get(record, source);

  const _translatable = baseLabel(record)

  if(new Object(value) === value){
    return "error"
  }


  if(isHTML(value)) {
    return stripTags(value)
  }

  if(Array.isArray(value)) {
    return <div style={styles.wrapper}>{value.map(item => <Chip key={item}
      color="secondary"
      label={_translatable ? translate(_translatable + item) : item}
      />)}</div>
  }

  if(_translatable && value.length) {
      return translate(_translatable + value)
  }


  return value;

};

MultiContentField.defaultProps = {
  baseLabel : function(){ return false; }
}


export default translate(MultiContentField);
