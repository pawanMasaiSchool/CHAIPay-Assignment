# CHAIPay-Assignment

Backend APIs for Stripe Payment gateway integration using 
Node.js
Express
Stripe Payment API


We are having following four routes build for this particular backend application



Create intent for payment
    • POST /api/v1/create_intent
    -> Create intent takes 4 things from request body
        • amount 
        • currency
        • payment_method_types
        • capture_method
            (if capture_method is not passed then by Default it will be "automatic")



Capture the created intent
    • POST /api/v1/capture_intent/:id
    -> For capturing the intent of the UNCAPTURED PaymentIntent one needs to pass the PaymentIntent in the url params of the request
    -> The thing to be noticed over here is that for capturing the intent the status should be "requires_capture" or else it will thow an error


Create a refund for the created intent
    • POST /api/v1/create_refund/:id
    -> When we create a new refund, we must specify a "Charge" or a "PaymentIntent" object on which to create it which should be specified in the request params like ->  "/create_refund/:id"


    
Get a List of all intents
    • GET /api/v1/get_intents
    -> At any given point we can list all the intents 
    -> limit can be passed in request body for getting the limitted number of intents
    -> if limit is not passed then default value of limit will be 3