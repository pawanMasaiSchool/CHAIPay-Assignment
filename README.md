# CHAIPay-Assignment
<h2>Deployment Link https://chai-pay.herokuapp.com/</h2>
<h2>Postman Collection Link https://bit.ly/38hOJZh</h2>

Backend API for Stripe Payment gateway integration using <br/><br/>
**Node.js**<br/>
**Express**<br/>
**Stripe Payment API**<br/>


<h4>We are having following four routes build for this particular backend application</h4>



<h1>1) Create intent for payment </h1>
<h2>• POST /api/v1/create_intent</h2>
    
<h3>Create intent takes 4 things from request body</h3>

    
    • amount  
    • currency 
    • payment_method_types 
    • capture_method (if capture_method is not passed then by Default it will be "automatic")
    

<hr/>
<br/>

<h1>2) Capture the created intent</h1>
<h2>• POST /api/v1/capture_intent/:id</h2>
    
    • For capturing the intent of the UNCAPTURED PaymentIntent one needs to pass the PaymentIntent in the url params of the request
    • The thing to be noticed over here is that for capturing the intent the status should be "requires_capture" or else it will thow an error

<hr/>
<br/>

<h1>3) Create refund for created intent</h1>
<h2>• POST /api/v1/create_refund/:id</h2>
    
    • When we create a new refund, we must specify a "Charge" or a "PaymentIntent" object on which to create it which should be specified in the request params like ->  "/create_refund/:id"

<hr/>
<br/>
    
<h1>4) Get a List of all intents</h1>
<h2>• GET /api/v1/get_intents</h2>

    
    • At any given point we can list all the intents 
    • limit can be passed in request body for getting the limitted number of intents
    • if limit is not passed then default value of limit will be 3
