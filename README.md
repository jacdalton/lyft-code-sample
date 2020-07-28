## Code sample for Lyft's apprenticeship program

### To run the code
* Clone the repo using ```git clone https://github.com/jacdalton/lyft-code-sample.git```
* Run ```npm install``` to ensure dependencies are acquired (express, body-parser) 
* Start the server at localhost:3000 with ```node index.js```
* To see it in action, in a separate command line window, run ```curl -X POST http://localhost:3000/test --data '{"string_to_cut": "YOUR_STRING_HERE"}' -H 'Content-Type: application/JSON' ```
  * Replace ```YOUR_STRING_HERE``` with whatever string you would like
* App returns JSON object with the key “return_string” and a string value containing every third letter from the original string

### Test case
* Input: ```curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/JSON'```
* Expected output: ```{"return_string":"muydv"}```
