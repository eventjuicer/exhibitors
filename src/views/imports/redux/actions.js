

import {

  IMPORT_RESET,
  IMPORT_CHANGE_MAPPING,
  IMPORT_CHANGE_DATA,

} from './types';



export const changeImportMapping = (index, value) => ({
  type: IMPORT_CHANGE_MAPPING,
  index: index,
  value: value
});

export const resetImport = () => ({
  type: IMPORT_RESET
});

export const changeImportData = (data = {}) => ({
  type: IMPORT_CHANGE_DATA,
  data: data
});
