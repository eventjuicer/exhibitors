import React, {useState} from "react";
import { 
    Edit, 
    TabbedForm, 
    FormTab,
    TextInput, 
    DateTimeInput,  
    BooleanInput,  
    required,
    choices,
    RadioButtonGroupInput,
    ReferenceInput,
    SelectInput,
    number,
    maxLength,
    AutocompleteInput,
    useMutation,
    useRefresh
} from 'react-admin';
import Typography from '@material-ui/core/Typography'
import RaEditor from '../../components/MarkdownEditor'
import categories from './categories'
import {useCompany} from '../../contexts';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames'

/**
 * <TextField
            name={name}
            label={label}
            onChange={onChange}
            error={!!(touched && error)}
            helperText={touched && error}
        />
 */

 const useStyles = makeStyles({
    postImage : {
        cursor: 'pointer'
    },
    coverPostImage: {
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "darkred"
    }
 })

const Aside = ({ record }) => {

    const classes = useStyles();
    const refresh = useRefresh();
    const [mutate, { loading }] = useMutation();
    const approve = event =>  mutate({
        type: 'update',
        resource: 'posts',
        payload: {
            id: record.id,
            data: { cover_image_id: event.target.id }
        }
    }, {
        onSuccess: () => {
            refresh();
        }
    });

    const handleDragStart = (event, path) => {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
         */
        event.dataTransfer.setData("text/plain", path);
        console.log(event)
    }
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Post images</Typography>
            {record && record.images && record.images.map(image => (
                <img 
                    key={ image.id } 
                    id={ image.id } 
                    draggable="true" 
                    onDragStart={ (event) => handleDragStart(event, image.path) } 
                    src={ image.path } 
                    alt="" 
                    style={{width:"100%", marginBottom: 10}} 
                    onDoubleClick={ approve } 
                    disabled={ loading } 
                    className={ cn({
                        [classes.postImage] : true,
                        [classes.coverPostImage]: record.cover_image_id == image.id
                    }) }
                />
            ))}
        </div>
    );

}


const PostEdit = ({permissions, ...props}) => {
    
    const company_id = useCompany();

    return (
        <Edit aside={<Aside />} {...props} mutationMode="pessimistic">
            <TabbedForm warnWhenUnsavedChanges>
    
             <FormTab label="Content">
    
                <TextInput disabled label="Id" source="id" />
                <TextInput source="meta.headline" label="Title" validate={required()} fullWidth />
                <TextInput multiline source="meta.quote" label="Intro" validate={maxLength(255)} options={{ multiline: true }} fullWidth />
                <RaEditor source="meta.body" label="Content" validate={required()}  />   
    
             </FormTab>
    
   
    
            <FormTab label="Publish">
    
            <RadioButtonGroupInput fullWidth={true} source="category" validate={[required(), choices(categories.map(c=>c.id))]} choices={categories} />
            <BooleanInput source="is_published" />
           
            <DateTimeInput label="Publication date" source="published_at" /**defaultValue={new Date()} */ />
    

            </FormTab>
    
    
           
    
                {/* <ReferenceField label="Comments" reference="companies" target="company_id">
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceField> */}
            </TabbedForm>
        </Edit>
    );
}

export default PostEdit;