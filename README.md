# CHAIPay-Assignment

Backend APIs for Stripe Payment gateway integration using 
Node.js
Express
Stripe Payment API


We are having following four routes build for this particular backend application

Create intent for payment
    • POST /api/v1/create_intent

Capture the created intent
    • POST /api/v1/capture_intent/:id

Create a refund for the created intent
    • POST /api/v1/create_refund/:id
    
Get a List of all intents
    • GET /api/v1/get_intents