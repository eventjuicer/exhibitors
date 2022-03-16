import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from 'react-admin';
import Dropzone from 'react-dropzone';
import IconButton from '@material-ui/core/IconButton';
import IconRemove from '@material-ui/icons/RemoveCircleOutline';
import Mappings from './Mappings';
import styles from '../../../styles/dropzone';
import { changeImportData, resetImport} from '../redux/actions';
import { Parse } from '../../../api/csv';

const CsvImport = ({input, mappings, meta}) =>  {

  const [files, setFiles] = useState([])
  const [data, setData] = useState(null)
  const [mappedData, setMappedData] = useState(null)
  const translate = useTranslate()

  useEffect(()=>{
    // if (
    //   'data' in nextProps &&
    //   Array.isArray(nextProps.data) &&
    //   nextProps.data.length
    // ) {
    //   convertData(nextProps.data, nextProps.mappings);
    // }

  })


  const outputResult = (data) => {
    input.onChange(data);
  }

  const convertData = (data, mappings) => {
    let newData = [];

    if (data && Array.isArray(data)) {
      newData = data.map(row => {
        const newRow = {};

        for (var key in mappings) {
          if (mappings.hasOwnProperty(key)) {
            if (mappings[key] !== 'skip') {
              newRow[mappings[key]] = row[key];
            }

            if (mappings[key] === 'email') {
              //validating...?
            }
          }
        }

        return newRow;
      });
    }

    this.outputResult(newData);
  };


  const onReset = () =>
  {
    const {resetImport} = this.props;
    resetImport();
  }

  const onDrop = (acceptedFiles, rejectedFiles, onload) => {
    //reset!

    const {resetImport, changeImportData} = this.props;

    resetImport();

    acceptedFiles.forEach((file, i) => {

      const reader = new FileReader();

      reader.onload = event => {

        Parse(event.target.result).then(({ data }) => {
           changeImportData(data.filter(row => Array.isArray(row)));
        });

      }

      reader.readAsText(file);
    });
  };

  return (
    <div>
      <div>

       {
         !data.length ? <Dropzone
          accept="text/csv"
          multiple={false}
          onDrop={this.onDrop}
          style={styles.dropzone}
        >
          <p style={{ textAlign: 'center' }}>
            {translate("resources.imports.fields.drop")}
          </p>
        </Dropzone> : <p>{translate("resources.imports.fields.success")}<IconButton onClick={this.onReset}><IconRemove color="red" /></IconButton></p>
      }
      </div>

      {meta.touched &&
        meta.error && (
          <div className="alert alert-important">{meta.error}</div>
        )}

      {data && data[1] && <Mappings data={data[1]} />}
    </div>
  );

}

// const mapStateToProps = state => state.import;


//   translate,
//   connect(mapStateToProps, { changeImportData, resetImport })
// );

export default CsvImport
