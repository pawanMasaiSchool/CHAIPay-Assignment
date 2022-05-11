const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;
const intentRouter = require("./routes/intent.routes")

app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).send("Your Backend App is working fine")
});


// Using the "intentRouter" for managing all the four routes with common starting params asked in the question
app.use("/api/v1",intentRouter);


app.listen(PORT,()=>{
    console.log(`App is Listening at ${PORT}`);
})