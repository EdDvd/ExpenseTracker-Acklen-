const {Router} = require('express');
const router = Router();

const Wallet = require('../models/walletsModel');


router.get('/', async(req, res)=>{
  
        const wallets = await Wallet.find();
        res.json(wallets);

   
   
});

router.post('/new',async(req, res)=>{
    const {name, budget}= req.body;
    const newWallet= new Wallet({name, budget})
    await newWallet.save();
    res.json({message:'saved'});
});

router.delete('/delete/:id', async(req,res)=>{
    //console.log(req.params.id)
     const wallet= await Wallet.findByIdAndDelete(req.params.id);
     console.log(wallet)
     res.json({message: 'deleted'});

});

router.put('/update/:id',async(req, res)=>{
    
    let wallet = await Wallet.findByIdAndUpdate(req.params.id,req.body);

    await wallet.save();
    res.send('updated');
});  

router.put('/newtrans/:id',async(req, res)=>{
    const {title, amount, type}= req.body;
    let wallet = await Wallet.findById(req.params.id);
    wallet.transactions.push({title, amount, type});
    await wallet.save();
    res.json(wallet);

});

router.delete('/deletrans/:id/:idt', async(req,res)=>{
    
     const wallet= await Wallet.findById(req.params.id);
     let trans= wallet.transactions
     let transx =await trans.findById(req.params.idt);
     console.log(transx);
      
     res.json({message: 'deleted'});

});

module.exports= router;