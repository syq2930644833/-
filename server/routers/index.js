const testController =  require('../controller/testController/index')
console.log('testController: ', testController);

const router = require('koa-router')()


const routers = router
        .get('/v1/exhibition/findAllData', testController.findTest)


module.exports = routers