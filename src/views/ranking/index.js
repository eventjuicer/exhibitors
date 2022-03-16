
import {Card} from '../../components'
import PartnerPerformance from "./components/PartnerPerformance"
import * as icons from '../rewards/icons'
import { useSettings } from '../../contexts'

const Ranking = () => {

  const {event_id, show_points} = useSettings("promoninja", {})

  return (<Card><PartnerPerformance event_id={event_id} icons={icons} show_points={show_points} /></Card>)


}


export default Ranking