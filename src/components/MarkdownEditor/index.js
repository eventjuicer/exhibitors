
import React, {useState, useEffect, Children} from "react";
import { useInput, Labeled, fetchUtils, useRefresh } from 'react-admin';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert'; 
import Button from '@material-ui/core/Button'; 
import Editor from "rich-markdown-editor";
import debounce from "lodash/debounce";
import * as embeds  from './embeds';
import theme from './theme';
//import {Image as CloudinaryImage} from 'cloudinary-react'
import {useUploadFiles} from '../../helpers'
import ReuseAlreadyUploadedImage from './ReuseAlreadyUploadedImage'
import get from 'lodash/get'
import ContentProtector, {useContentProtector} from './ContentProtector'
import {FormHelperText} from '../'

const useStyles = makeStyles(theme => ({
    root : {
        transition: 'background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        maxWidth: 800,
        minWidth: 500,
        borderColor: "#666",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 30
    }
}))


export const MarkdownEditor = (props) => {
   
    const classes = useStyles();

    const uploadFile = useUploadFiles();

    const {
        input: { name, onChange, onBlur, onFocus, value, checked},
        meta: { touched, error},
        isRequired
    } = useInput(props)

    const {content, ...contentProtectorProps} = useContentProtector(
      get(props.record, props.source)
    )

    const handleChange = debounce(value => {
        const text = value();
        onChange(text)
    }, 250);

    const {record: {id, label}, resource} = props;


    return (
    <Box>
      <ContentProtector {...contentProtectorProps} />
      <FormHelperText error={touched && error}>{error}</FormHelperText>


    <Box p={1} mb={1} borderBottom={1} className={classes.root}>                           
      
       <Labeled label={label || name}>
         <Editor
        id={name}
        defaultValue={content}
        value={content}
        theme={theme}
        readOnly={false}
        headingsOffset={3}
        onChange={handleChange}

        // handleDOMEvents={{
        //   focus: () => console.log("FOCUS"),
        //   blur: () => console.log("BLUR"),
        //   paste: () => console.log("PASTE"),
        //   touchstart: () => console.log("TOUCH START"),
        // }}

        // extensions={[new ReuseAlreadyUploadedImage()]}

        onSave={options => console.log("Save triggered", options)}
        onCancel={() => console.log("Cancel triggered")}
        onClickLink={(href, event) =>
            console.log("Clicked link: ", href, event)
          }
        onHoverLink={event => {
            console.log("Hovered link: ", event.target.href);
            return false;
        }}
        onClickHashtag={(tag, event) =>
            console.log("Clicked hashtag: ", tag, event)
        }
        onCreateLink={title => {
            console.log("onCreateLink link: ", title);
            // Delay to simulate time taken for remote API request to complete
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (title !== "error") {
                  return resolve(
                    `/doc/${encodeURIComponent(title.toLowerCase())}`
                  );
                } else {
                  reject("500 error");
                }
              }, 1500);
            });
        }}
        onShowToast={(message, type) => window.alert(`${type}: ${message}`)}
        onSearchLink={async term => {
            console.log("Searched link: ", term);

            // Delay to simulate time taken for remote API request to complete
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(
                  // docSearchResults.filter(result =>
                  //   result.title.toLowerCase().includes(term.toLowerCase())
                  // )

                  [
                    {title: "asd", href: "https://google.com"}, 
                    {title: "ass222sd", href: "https://google.com"}
                  ]
                );
              }, Math.random() * 500);
            });
        }}
        // uploadImage={file => uploadFile(file, resource, id).then(data => data.path.replace(/\.svg$/i, `.jpg`)) }
        // embeds={Object.values(embeds)}
        />
       
    </Labeled>
    </Box></Box>)
}

export default MarkdownEditor