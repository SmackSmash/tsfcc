module.exports = process.env === 'production' ? require('./prod') : require('./dev');
