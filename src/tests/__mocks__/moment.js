// import moment from 'moment'; // --> marche pas --> fonction qui s'apelle elle même :-)
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};