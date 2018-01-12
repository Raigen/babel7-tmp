if (require.main === module) {
    require('./server').start()
} else {
    // require('@babel/register')
    module.exports = require('./server')
}
