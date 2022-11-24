const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.postcomments = functions.https.onRequest((request, response) => {
// 1. Receive comment data in here from user POST request
// 2. Connect to our Firestore database
return admin.firestore().collection('comments').add(request.body).then(()=>{
response.send("Saved in the database");
});
});


exports.helloWorld = functions.https.onRequest((request, response) => {
 functions.logger.info("Hello logs!", {structuredData: true});
 response.send("Hello from Firebase!");
});


exports.isLoggedIn = functions.https.onRequest((request, responce) => {
    functions.logger.info("Logged logs!", {structuredData: true});
    response.send("Not logged in");
});

exports.echofunction = functions.https.onRequest((request, response) => {
    response.send(request.query.data);
});

exports.doubleNum = functions.https.onRequest((request, response) => {
    let entered = request.query.data;

    if(isNaN(entered)){
        response.send("Please enter a number");
    }
    else{
        let enteredDouble = entered * 2;
        response.send(enteredDouble);
    }
});
    


