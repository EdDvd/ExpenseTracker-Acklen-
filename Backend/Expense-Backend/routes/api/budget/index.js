var express =require('express');
var router= express.Router();

function  budgetApi(db){
router.get('/',  (req, res)=> {
    res.send('budget');
  
});

router.get('/',(req,res)=>{


});
  return router;

}

module.exports=budgetApi;