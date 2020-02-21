var ObjectId = require('mongodb').ObjectID;


function budgetModel(db){

   let budOption ={};
   var walletCollection =db.collection("Wallets");

budOption.getWallet=(hndl)=>{
    walletCollection.find({}).toArray(
        (err,rslt)=>{
            if(err)
            {
                console.log(err);
                return hndl(err,null);
            }
          return hndl(null,rslt);
        }
    );
}//get wallet

   budOption.saveNew= (newWallet,hndl)=>{
   walletCollection.insertOne(newWallet,(err,rslt)=>{
     if(err){
         console.log(err);
         return hndl(err,null);
     }
     else{ 
         console.log('bdtmdl'); 
         return hndl(null,rslt);
        }
   });
   }// save new

    return budOption;

}

module.exports=budgetModel;
