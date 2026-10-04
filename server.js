const express=require('express');const app=express();app.get('/',(req,res)=>res.send('CashTap Backend is live'));const PORT=process.env.PORT||10000;app.listen(PORT);
