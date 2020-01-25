var express =require('express');
var router= express.Router();



function  budgetApi(db){
  var bugetModel =require('./budget.model')(db);
  
router.get('/',  (req, res)=> {
    res.send('budget');
  
});

router.get('/list',(req,res)=>{
res.send('list of wallets');

});

router.post('/new',(req,res)=>{
res.send('insertar wallet ');

var newWallet= Object.assign({}, req.body,
  {
    "Id":req.body.Id,
    "Name":req.body.Name,
    "Budget":parseInt(re.body.Budget)

  }
  );



});
  return router;

}

module.exports=budgetApi;