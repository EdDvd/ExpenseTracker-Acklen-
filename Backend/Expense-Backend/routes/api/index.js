var express =require('express');
var router = express.Router();

function routerApi(db){
var budgetRoutes = require('./budget/index')(db);
router.use('/bud',budgetRoutes);   
    
return router;
}
module.exports=routerApi;

