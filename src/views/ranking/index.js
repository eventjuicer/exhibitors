
import {Card} from '../../components'
import PartnerPerformance from "./components/PartnerPerformance"
import * as icons from '../rewards/icons'


const Ranking = ({setting="promoninja"}) => {


  return (<Card><PartnerPerformance icons={icons} setting={setting} /></Card>)


}


export default Ranking