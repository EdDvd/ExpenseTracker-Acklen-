var express =require('express');
var router= express.Router();

var Wallet = require('./wallet.model');

function walletApi(){

  router.get('/',(req, res)=>{
    res.send('wallet 2.0');
  });

  return router;
}

/*function  budgetApi(db){
  var budgetModel =require('./budget.model')(db);
  
router.get('/',  (req, res)=> {
    res.send('budget');
  
});// end get

router.get('/wallet',(req,res)=>{
budgetModel.getWallet((err,wallet)=>{
  if(err){
    res.status(404).json([]);
    console.log('error wallet');
  }
  else{
    res.status(200).json(wallet);
    console.log('todo bien');
  }
});

});//end get wallet

router.post('/new',(req,res)=>{

var newWallet= Object.assign({}, req.body,
  {
    "Name":req.body.Name,
    "Amount":parseInt(re.body.Amount),
    "Type":req.body.Type

  });// end object.assign

 budgetModel.saveNew(newWallet, (err,rslt)=>{
   if(err){
     res.status(400).json(err);
     console.log('error al insertar');
     }
    else{
      res.status(200).json(rslt);
      console.log('inserccion correcta');
    } 
    });//end savenew
   
  });*///end post new

module.exports= walletApi;