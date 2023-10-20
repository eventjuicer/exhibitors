
import { Box } from "../../../components";
import { useCompanyDataItem, useMeetups } from "../../../helpers";
import { Alert } from "../../../components";
import { EditButton } from "react-admin";
import { isEmpty } from "../../../helpers";
import Markdown from "../../../components/Markdown";
const RejectMessageEdit = () => {

const record = useCompanyDataItem("ltd_reject_template");
const meetups = useMeetups("LTD");

if(isEmpty(meetups)){
     return null
}

if(!record || !("id" in record)){
    return null
}

return (<Box mb={2}>
    <Alert 
    titleLabel="resources.meetups.ltd.reject_template_title"
    label={`${record.value}`.substring(0, 100)}
    >
    <Box mb={1}>
<EditButton basePath="/companydata" label="Edit" record={record} />
</Box>

</Alert>
</Box>)

}


export default RejectMessageEdit