
import {Card, Grid, Box, ResourceAbout, ButtonLink} from '../../components'
import PartnerPerformance from "./components/PartnerPerformance"
import * as icons from '../rewards/icons'
import RankingIcon from '@material-ui/icons/TrendingUp';
import {PromoteIcon} from '../promote'

const Ranking = ({setting="promoninja"}) => {


  return (
  <Box mt={8}><Card>
    <Grid container>
      <Grid item xs={12} sm={12} md={9}>
      <PartnerPerformance icons={icons} setting={setting} />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
      <ResourceAbout 
        resource="ranking" 
        aside={true} 
        icon={RankingIcon} 
        descriptionLabel="logistics.timeline.items.ranking.description" 
        buttons={<ButtonLink to="promote" label="resources.promote.menu" startIcon={<PromoteIcon />} variant="text" />}
        />
      </Grid>
    </Grid>
   
    
    </Card></Box>)


}

export {RankingIcon}

export default Ranking