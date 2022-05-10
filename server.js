const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Your Backend App is working fine")
});


app.listen(PORT,()=>{
    console.log(`App is Listening at ${PORT}`);
})