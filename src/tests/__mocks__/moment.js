// import moment from 'moment'; // --> will not work --> fonction who call herself (name of the file) :-)
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};