
import {useTranslate} from "react-admin"

const ResourceTitle = ({resource}) => {

    const translate = useTranslate()

    if(!resource){
        return null
    }


    return translate(`resources.${resource}.menu`)
}

export default ResourceTitle


/**
 * 
 * 

basePath: "/upgrades"
className: undefined
hasCreate: false
hasEdit: false
hasList: true
hasShow: true
history: {length: 11, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
location: {pathname: '/upgrades', search: '', hash: '', state: undefined}
match: {path: '/upgrades', url: '/upgrades', isExact: true, params: {…}}
options: {}
permissions: "6573adcaa970aeec560cbac4a475ffe81b6b1a0d"
record: undefined
resource: "upgrades"
syncWithLocation: true

 */