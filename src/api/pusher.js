
import Pusher from 'pusher-js'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    Pusher.logToConsole = true;
}

/**
* https://dashboard.pusher.com/apps/1244440/getting_started
*/

const createPusherInstance = () => new Pusher("ef91111f814df12adcef", {
    cluster: "eu",
});

export default createPusherInstance

