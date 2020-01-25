var ObjectId = require('mongodb').ObjectID;


function budgetModel(db){

   let budOption ={};
   var walletCollection =db.collection("Wallet");

   budOption.saveNew= (newWallet,hndl)=>{
   walletCollection.insertOne(newWallet,(err,rslt)=>{
     if(err){
         console.log(err);
         return hndl(err,null);
     }  
         return hndl(null,rslt);
   });
   }

    return budOption;

}

module.exports=budgetModel;
