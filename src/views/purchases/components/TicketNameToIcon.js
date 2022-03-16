


import React from 'react'
import CarIcon from '@material-ui/icons/DirectionsCar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PowerIcon from '@material-ui/icons/Power';
import TextureIcon from '@material-ui/icons/Texture';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import StoreIcon from '@material-ui/icons/Store';
import RoomIcon from '@material-ui/icons/Room';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import StarIcon from '@material-ui/icons/Star';


const nameToIcon = {
    parking: CarIcon,
    catering: RestaurantIcon,
    electricity: PowerIcon,
    voltage: PowerIcon,
    floor: TextureIcon,
    carpet: TextureIcon,
    display: DesktopWindowsIcon,
    chair: EventSeatIcon,
    stool: EventSeatIcon,
    fullprint: StoreIcon,
    osb: StoreIcon,
    rack: StoreIcon,
    leaflets: VolumeUpIcon,
    premium: StarIcon
}


const TicketNameToIcon = ({name="", roles=[], className}) => {
    if(!name){
        return null
    }
    if(Array.isArray(roles) && roles.includes("exhibitor")){
        return <RoomIcon className={className} />
    }
    const search = Object.keys(nameToIcon).find(str => name.includes(str))
    return search ? React.createElement(nameToIcon[search], {className}): null

}

export default TicketNameToIcon
