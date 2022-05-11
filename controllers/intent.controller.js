const stripe = require('stripe')('sk_test_51KxrM3SEXZBp9EpvPbvqmKX0ljT0ukgqkTurhCnvTOCCp3OPxkAZAIwjzIL9BZqDmd3lkI274Z8saAeckbAsaZCS00YcR1GUN2');



// Managing the route  --> POST "/api/v1/create_intent" for creating a new payment intent in the following "createIntent" function
const createIntent = async (req,res) => {
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
            payment_method_types: req.body.payment_method_types,
            capture_method: req.body.capture_method,
        });

        if(!paymentIntent){
            return res.status(400).send("No Payment Intent Created")
        }
        res.status(200).json(paymentIntent)
    }
    catch(err){
        return res.status(500).send({ERROR: err.toString()})
    }
}




// Capturing the Intent requires id to be passed in params like --> POST "/api/v1/capture_intent/:id"
const captureIntent = async (req,res) => {
    try{
        const captured = await stripe.paymentIntents.capture(
            req.params.id
        );
        if(!captured){
            return res.status(400).send("No Payment Intent Captured")
        }
        res.status(200).json(captured)
    }
    catch(err){
        return res.status(500).send({ERROR: err.toString()})
    }
}




// creation of refund intent needs charge for which to create it.
const refundForCreatedIntent = async (req,res) => {
    try{
        
        const refund = await stripe.refunds.create({
            charge: req.params.id
        });

        if(!refund){
            return res.status(400).send("No Refund Created")
        }
        res.status(200).json(refund)

    }
    catch(err){
        return res.status(500).send({ERROR: err.toString()})
    }
}



// Managing the route  -->  GET "/api/v1/get_intents" to get a List of all intents in the following "getAllIntents" function
const getAllIntents = async (req,res) => {
    try{
        const allIntents = await stripe.paymentIntents.list();
        if(!allIntents){
            return res.status(400).send("No Intent List Found")
        }
        res.status(200).json(allIntents)
    }
    catch(err){
        return res.status(500).send({ERROR: err.toString()})
    }
}

module.exports = {
    createIntent,
    captureIntent,
    refundForCreatedIntent,
    getAllIntents
}