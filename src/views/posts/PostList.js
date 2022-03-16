import React from "react";
import { 
    BulkDeleteButton, 
    Filter, 
    List, 
    Datagrid, 
    TextField, 
    TextInput, 
    DateField, 
    BooleanField, 
    BooleanInput,
    ChipField,
    FunctionField,
    useListContext,
    EditButton,
    SelectInput,
    ReferenceInput,
    AutocompleteInput,
    Button,
    useGetList,
    Loading
} from 'react-admin';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {useCompany} from '../../contexts';
import get from 'lodash/get'
import categories from './categories'
import {CroppedTextField, ResourceTitle} from '../../components'
import PostListBulkActions from './components/PostListBulkActions'
import PostFlagsField from './components/PostFlagsField'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useGet} from '../../helpers'

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <BooleanInput source="is_promoted" label="Promoted?" />
        <BooleanInput source="is_sticky" label="Sticky?" />
        <BooleanInput source="is_published" label="Published?" />
        <SelectInput
            source="category"
            choices={categories}
        />
        <ReferenceInput source="company_id" reference="companies" label="Company">
        <AutocompleteInput optionText="profile.name" shouldRenderSuggestions={()=>true} />
        </ReferenceInput>

    </Filter>
);

const PreviewButton = ({record, label}) => {

   if(!record){
       return null
   }
    
   const href = `https://ehandel.com.pl/api/preview?secret=12345&slug=/preview,${record.id}`

   return ( <IconButton href={href} target="_blank" label="Preview"><PlayArrowIcon/></IconButton>)
}

const Aside = () => {
    
    const company_id = useCompany();
    // const { data, ids } = useListContext();
    const {data, loading} = useGet('posts-stats');

    if(loading){
        return <Loading />
    }

    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Post details</Typography>
            <Typography variant="body2">
                {`Published ${data.published}`}
            </Typography>
            <Typography variant="body2">
               {`Promoted ${data.promoted}`}
            </Typography>
        </div>
    );
}

const PostList = (props) => {

    const company_id = useCompany();


    return (
        <List 
            filters={<PostFilter />}
            filter={{ company_id }}
            bulkActionButtons={<PostListBulkActions />}
        // filterDefaultValues={{ is_published: true }}
            perPage={100}
            sort={{ field: 'id', order: 'DESC' }}
            aside={<Aside />}
            exporter={false}
            title={ <ResourceTitle {...props} />}
            {...props}
        >
            <Datagrid>
                {/* <TextField source="id" /> */}
                <CroppedTextField source="meta.headline" label="Title" bold={true} />
                <EditButton />
                <PostFlagsField label="Status" /> 
                <ChipField source="category" />
                {/* <DateField source="updated_at" /> */}
                <DateField source="published_at" />
                <PreviewButton />
            </Datagrid>
        </List>
    );

} 

export default PostList