var express =require('express');
var router = express.Router();

function routerApi(){
router.get('/',(req,res)=>{
    res.send('api');
});

var budgetRoutes = require('./wallet/index')();
router.use('/wllt',budgetRoutes);   
    
return router;
}
module.exports=routerApi;

