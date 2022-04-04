import { ResourceAbout, Typography, GreyPaper } from "../../../components"
import { useLimit } from "../../../contexts"

const VisitorListAside = (props) => {
    const limit = useLimit("meetups")
  
    const infobox = <GreyPaper>
      <Typography variant="h5" label="resources.meetups.limit" labelProps={{limit}} />
      <Typography variant="body1" paragraph label="resources.meetups.limit_increase" />
      </GreyPaper>
   
    return  <ResourceAbout {...props} pre={infobox} aside={true} descriptionLabel="logistics.timeline.items.meetups.description" />
  
  }

export default VisitorListAside