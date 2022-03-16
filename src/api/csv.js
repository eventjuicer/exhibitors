import Papa from 'papaparse';

export const Parse = file => {
  return new Promise(function(complete, error) {
    Papa.parse(file, { complete, error });
  });
};
