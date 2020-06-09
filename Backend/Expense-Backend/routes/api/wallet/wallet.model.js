const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var WalletSchema = Schema({
    Name: {type: String, require: true},
    Budget: {type: String, require: true},
    Transaction: {
                  Title: {type: String},
                  Amount: {type: Number},
                  Category: {type: String}
                 },
    Created: {type: Date, default: Date.now}
})

/*var ObjectId = require('mongoose').ObjectID;

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
           else{ 
            
          return hndl(null,rslt);}
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
module.exports=budgetModel;*/
module.exports= model('Wallet',WalletSchema);