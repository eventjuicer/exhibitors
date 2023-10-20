import { Paper, Box, Typography, Markdown } from '../../components';
import { useIsMobile } from '../../helpers';
import { useSettings } from '../../helpers';

const Aside = ({record}) => {

    const isMobile = useIsMobile()
    const markdown = useSettings("companydata.markdown", [])

    if(!record){
      return null
    }

    if(!(markdown || []).includes(record.name)){
      return null
    }


    return (<Paper><Box width={300} p={2}>
    <Typography variant="h5" label="guides.markdown.title" gutterBottom />
    <Markdown label="guides.markdown.description" />

    </Box></Paper>)
  
  }

export default Aside