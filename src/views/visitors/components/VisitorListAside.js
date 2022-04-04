import { ResourceAbout, Typography, GreyPaper } from "../../../components"
import { useLimit } from "../../../contexts"

const VisitorListAside = ({permissions, ...props}) => {

    const limit = useLimit("meetups")
  
    const infobox = permissions? <GreyPaper>
      <Typography variant="h5" label="resources.meetups.limit" labelProps={{limit}} />
      <Typography variant="body1" paragraph label="resources.meetups.limit_increase" />
      </GreyPaper>: null
   
    return  <ResourceAbout {...props} pre={infobox} descriptionLabel="logistics.timeline.items.meetups.description" />
  
  }

export default VisitorListAside